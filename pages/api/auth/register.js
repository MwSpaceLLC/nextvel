import {prisma} from "../../../app/helpers/database";
import {withApiSession} from "../../../app/helpers/session";

import {Mail} from "../../../app/helpers/nodemail";

import ConfirmCodeMail from "../../../resources/views/emails/ConfirmCode";


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
        return sendResponse("indirizzo email già preso", 403)
    }

    // send email from node to smtp
    Mail.to(req.session.confirm.email, 'Confirm your code from essebipi.eu')
        .send(<ConfirmCodeMail {...req.session.confirm}/>, async (info) => {

            //TODO: make staff
            console.log(info)

            //save user session
            await req.session.save();
            return res.status(200).json()
        })
});
