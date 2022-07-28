import bcrypt from "bcryptjs";
import {prisma} from "../../../app/helpers/database";
import {csrf, withApiSession} from "../../../app/helpers/session";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {
    await csrf(req, res); // protect api with csrf

    if (!req.session.confirm) return res.status("403").json({message: 'Invalid session, register again'});

    const {email, password, name, number} = req.session.confirm;

    if (req.method !== 'POST' || !password || !email || !name || !req.body.number) return res.status("403").json({message: 'Code not exists in request'});

    if (req.session.confirm.random !== parseInt(req.body.number)) {
        return res.status("422").json({message: 'Invalid code'})
    }

    // make password hash
    const hash = bcrypt.hashSync(password);

    // Store hash in your password DB. | store in to a session USER
    req.session.user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hash,
        }
    })

    delete req.session.confirm; //delete old confirm
    await req.session.save(); // save session

    return res.status(200).json();

});
