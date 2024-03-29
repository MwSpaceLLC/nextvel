import {prisma} from "../../../helpers/database";
import {withApiSession} from "../../../helpers/session";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    const user = await prisma.user.findUnique({where: {id: req?.session?.user?.id ?? 0}});

    return !user ? res.status(403).json() : res.json(user);

});
