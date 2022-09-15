import {prisma} from "../../../../app/helpers/database";
import {csrf, generateToken, withApiSession} from "../../../../app/helpers/session";

import {Mail} from "../../../../app/helpers/nodemail";
import ResetPassword from "../../../../resources/views/emails/ResetPassword";

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

    // send email from node to smtp
    Mail.to(email, 'Richiesta reset della password | ' + user.name)
        .send(<ResetPassword email={email} link={link}/>, async (info) => {

            //TODO: make staff
            console.log(info)
            return res.status(200).json()
        })
}