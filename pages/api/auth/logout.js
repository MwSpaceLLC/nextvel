import {csrf, withApiSession} from "../../../app/helpers/session";

/**
 |--------------------------------------------------------------------------
 | Authentication Api routes
 |--------------------------------------------------------------------------
 */
export default withApiSession(async (req, res) => {
    await csrf(req, res); // protect api with csrf

    delete req.session.user; // delete user
    await req.session.save(); // save session

    return req.method !== 'POST' ? res.redirect(307, '/') : res.status(200).json()

});
