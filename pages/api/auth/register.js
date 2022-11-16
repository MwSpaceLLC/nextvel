import {prisma} from "../../../helpers/database";
import {withApiSession} from "../../../helpers/session";

import {Mail} from "../../../helpers/nodemail";

import ConfirmCodeMail from "../../../resources/emails/ConfirmCode";
import ResetPassword from "../../../resources/emails/ResetPassword";


/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    const {name, email, password, invoice} = req.body;

    if (req.method !== 'POST' || !password || !email || !name || !email) return res.status("403").json();

    const random = Math.floor(100000 + Math.random() * 900000);
    const sendResponse = (message, status = 200) => res.status(status).json({message: message})

    //create session confirm
    req.session.confirm = {name, email, password, random, invoice};

    // check if user already taken in to a DATABASE
    if (await prisma.user.findUnique({where: {email: email}})) {
        return sendResponse("indirizzo email non disponibile", 403)
    }

    // send email async from node to smtp
    const {accepted} = await Mail.to(email, 'Conferma il tuo codice').send(
        <ConfirmCodeMail {...req.session.confirm}/>
    )

    await req.session.save();
    return res.status(accepted ? 200 : 500).json()

});
