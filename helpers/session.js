import {withIronSessionApiRoute, withIronSessionSsr} from "iron-session/next";
import {getIronSession} from "iron-session";

import crypto from "crypto";
import moment from "moment";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

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

// export async function getServerSidePropsWrapper(handler) {
//
//     await createSessionId(req.session);
//
//     //TODO: make stuff
//
//     return handler
// }

export function withApiSession(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSession(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}

/**
 *
 * @param replace
 * @returns {string}
 */
export const generateToken = (replace = '') => (crypto.randomUUID() + crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, replace ?? '')

/**
 *
 * @param token
 * @param minutes
 * @returns {boolean}
 */
export const tokenIsExpired = (token, minutes = 5) => moment(token.createdAt).add(minutes, 'minutes').valueOf() < moment().valueOf()