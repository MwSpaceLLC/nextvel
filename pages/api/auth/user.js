import {prisma} from "../../../app/helpers/database";
import {csrf, withApiSession} from "../../../app/helpers/session";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {
    await csrf(req, res); // protect api with csrf

    const user = await prisma.user.findUnique({
        where: {
            id: req?.session?.user?.id ?? 0
        }
    });

    return !user ? res.status(403).json() : res.json(user);

});
