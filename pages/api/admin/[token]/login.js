import {withApiSession} from "../../../../app/helpers/session";
import app from "../../../../config/app";
import bcrypt from "bcryptjs";
import {prisma} from "../../../../app/helpers/database";
import {Mail} from "../../../../app/helpers/nodemail";

import AuthenticateMail from "../../../../resources/views/emails/AuthenticateMail";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    if (app.token !== req.query.token || req.method !== 'POST') return res.status("403").json();

    /*
     | Logic apis
     |------------------------------------------------------------------------*/

    req.session.admin = await prisma.admin.findUnique({where: {email: req.body.email}})

    // admin not found in to a DATABASE
    if (!req.session.admin) return res.status(403).json({message: 'Indirizzo email non corrisponde'});

    // check if password match
    if (bcrypt.compareSync(req.body.password, req.session.admin.password)) {

        // send email from node to smtp
        Mail.to('test-email@gmail.com')
            .send(<AuthenticateMail {...req.body}/>, async (info) => {

                //TODO: make staff
                console.log(info)

                //save user session
                await req.session.save();
                return res.status(200).json()
            })

    } else {

        return res.status("403").json({message: 'Password non corretta'})
    }

});
