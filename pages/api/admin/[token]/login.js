// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import bcrypt from "bcryptjs";

import {withApiSession} from "../../../../app/helpers/session";
import app from "../../../../config/app";

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

    if (bcrypt.compareSync(req.body.password, req.session.admin.password)) {

        //save user session
        await req.session.save();
        return res.status(200).json()
    }

    return res.status("403").json({message: 'Password non corretta'})

});
