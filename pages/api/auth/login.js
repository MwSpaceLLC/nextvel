import bcrypt from "bcryptjs";
import {prisma} from "../../../helpers/database";
import {withApiSession} from "../../../helpers/session";
import {Mail} from "../../../helpers/nodemail";
import AuthenticateMail from "../../../resources/emails/AuthenticateMail";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    const {email, password} = req.body;

    if (req.method !== 'POST' || !password || !email) return res.status("403").json({message: 'Errore nella richiesta, riprova più tardi'});

    req.session.user = await prisma.user.findUnique({where: {email: email}})

    // user not found in to a DATABASE
    if (!req.session.user) return res.status(403).json({message: 'Indirizzo e-mail o password errati'});
    req.session.user.address = req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"].split(/, /)[0] : (req.headers["x-real-ip"] || req.connection.remoteAddress);
    req.session.user.agent = req.headers["user-agent"];

    if (bcrypt.compareSync(password, req.session.user.password)) {

        Mail // send async email async from node to smtp
            .to(req.session.user.email, `⚠️Rilevato accesso al tuo account | ${req.session.user.name}`)
            .send(<AuthenticateMail user={req.session.user}/>).then()

        await req.session.save(); //save user session
        return res.status(200).json()
    }

    return res.status(403).json({message: 'Le credenziali non corrispondono'})

});
