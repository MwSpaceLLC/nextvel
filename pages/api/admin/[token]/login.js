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
     | Logic apis | Admin
     |------------------------------------------------------------------------*/

    req.session.user = await prisma.admin.findUnique({where: {email: req.body.email}})
    req.session.user.address = req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"].split(/, /)[0] : (req.headers["x-real-ip"] || req.connection.remoteAddress);
    req.session.user.agent = req.headers["user-agent"];

    // admin not found in to a DATABASE
    if (!req.session.user) return res.status(403).json({message: 'Indirizzo email non corrisponde'});

    // check if password match
    if (bcrypt.compareSync(req.body.password, req.session.user.password)) {

        Mail // send async email async from node to smtp
            .to(req.session.user.email, `⚠️Rilevato accesso al tuo account | ${req.session.user.name}`)
            .send(<AuthenticateMail user={req.session.user}/>).then()

        await req.session.save();
        return res.status(200).json()

    } else {

        return res.status("403").json({message: 'Password non corretta'})
    }

});
