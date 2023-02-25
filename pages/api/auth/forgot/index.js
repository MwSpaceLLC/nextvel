import {prisma} from "../../../../helpers/database";
import {generateToken, withApiSession} from "../../../../helpers/session";

import {Mail} from "../../../../helpers/nodemail";
import ResetPasswordMail from "../../../../resources/emails/ResetPasswordMail";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default async function handler(req, res) {

    const {email} = req.body;

    const sendResponse = (message, status = 200) => res.status(status).json({message: message})

    if (req.method !== 'POST' || !email) return sendResponse('Errore di richiesta, prova più tardi', 403);

    /*
     | Logic apis
     |------------------------------------------------------------------------*/

    const user = await prisma.user.findUnique({where: {email: email}})

    // user not found in to a DATABASE
    if (!user) return sendResponse('Indirizzo e-mail non trovato', 403);

    // make token for user
    const token = generateToken();

    // delete token for security
    await prisma.token.deleteMany({where: {userId: user.id}})

    // update token
    await prisma.user.update({
        where: {id: user.id},
        data: {
            tokens: {
                create: {
                    hash: token
                }
            }
        }
    })

    const link = `${req.headers.origin}/auth/forgot/${token}`;

    // send email async from node to smtp
    const {accepted} = await Mail.to(email, `🔑 Istruzioni per reimpostare la password | ${user.name}`).send(
        <ResetPasswordMail user={user} link={link}/>
    )

    return res.status(200).json({message: accepted ? 'Reset inviato via e-mail' : 'Errore invio e-mail, riprova più tardi'})
}