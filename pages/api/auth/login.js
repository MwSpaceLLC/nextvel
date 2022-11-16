import bcrypt from "bcryptjs";
import {prisma} from "../../../helpers/database";
import {withApiSession} from "../../../helpers/session";

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

    if (bcrypt.compareSync(password, req.session.user.password)) {

        await req.session.save(); //save user session
        return res.status(200).json()
    }

    return res.status(403).json({message: 'Le credenziali non corrispondono ai nostri registri'})

});
