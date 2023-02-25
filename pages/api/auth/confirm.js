import bcrypt from "bcryptjs";
import {prisma} from "../../../helpers/database";
import {withApiSession} from "../../../helpers/session";
import {Mail} from "../../../helpers/nodemail";
import RegistrateMail from "../../../resources/emails/RegistrateMail";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    if (!req.session.confirm) return res.status("403").json({message: 'Sessione non valida, registrati di nuovo'});

    const {email, password, name, number} = req.session.confirm;

    if (req.method !== 'POST' || !password || !email || !name || !req.body.number) return res.status("403").json({message: 'Il codice non esiste nella richiesta'});

    if (req.session.confirm.random !== parseInt(req.body.number)) {
        return res.status("422").json({message: 'Codice non valido'})
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

    Mail // send async email async from node to smtp
        .to(req.session.user.email, `🎊️ Benvenuto nel tuo nuovo account | ${req.session.user.name}`)
        .send(<RegistrateMail user={req.session.user}/>).then()

    delete req.session.confirm; //delete old confirm
    await req.session.save(); // save session

    return res.status(200).json();

});
