import {withApiSession} from "../../../helpers/session";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {

    delete req.session.user; // delete user
    await req.session.save(); // save session

    return req.method !== 'POST' ? res.redirect(307, '/') : res.status(200).json()

});
