import {withApiSession} from "../../../../helpers/session";
import app from "../../../../config/app";
import bcrypt from "bcryptjs";
import {prisma} from "../../../../helpers/database";
import {Mail} from "../../../../helpers/nodemail";

import AuthenticateMail from "../../../../resources/emails/AuthenticateMail";
import ResetPassword from "../../../../resources/emails/ResetPassword";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    // validate post, token, email & input
    if (
        app.token !== req.query.token ||
        req.method !== 'POST' ||
        !req.body.email ||
        !/\S+@\S+\.\S+/.test(req.body.email)
    ) {
        return res.status("403").json()
    }

    /*
     | Logic apis
     |------------------------------------------------------------------------*/

    req.session.admin = await prisma.admin.findUnique({where: {email: req.body.email}})

    // admin not found in to a DATABASE
    if (!req.session.admin) return res.status(403).json({message: 'Indirizzo email non corrisponde'});

    // check if password match
    if (bcrypt.compareSync(req.body.password, req.session.admin.password)) {

        // send email async from node to smtp
        Mail.to(req.session.admin.email, 'Login Alert').send(
            <AuthenticateMail {...req.session.admin}/>
        ).then()

        await req.session.save();
        return res.status(200).json()

    } else {

        return res.status("403").json({message: 'Password non corretta'})
    }

});
