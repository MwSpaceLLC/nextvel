import {withIronSessionApiRoute, withIronSessionSsr} from "iron-session/next";
import crypto from "crypto";
import moment from "moment";

const sessionOptions = {
    cookieName: process.env.NEXT_PUBLIC_APP_NAME,
    password: process.env.COOKIES_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        maxAge: 60 * 60 * 24, // 1 days
        secure: process.env.NODE_ENV === "production",
    },
};

export async function createSessionId(session) {
    if (!session.id) {
        session.id = crypto.randomUUID();
        await session.save();
    }

    return session.id;
}

export function withApiSession(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSession(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}

export const generateToken = (replace) => (crypto.randomUUID() + crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, replace ?? '')

export const tokenIsExpired = (token, minutes = 5) => moment(token.createdAt).add(minutes, 'minutes').valueOf() < moment().valueOf()

export const csrf = (req, res) => new Promise((resolve, reject) => {

    //todo: https://github.com/expressjs/csurf
    // This npm module is currently deprecated due to the large influx
    // of security vulunerability reports received, most of which are
    // simply exploiting the underlying limitations of CSRF itself.
    // The Express.js project does not have the resources to put into this module,
    // which is largely unnecessary for modern SPA-based applications.

    // return csurf({cookie: true})(req, res, (error, res) => {
    //     if (error) reject(error);
    //     return resolve(res);
    // });

    return resolve(res);

});