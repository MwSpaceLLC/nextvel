import {withIronSessionApiRoute, withIronSessionSsr} from "iron-session/next";
import crypto from "crypto";
import {prisma} from "./database";

const sessionOptions = {
    cookieName: process.env.NEXT_PUBLIC_APP_NAME,
    password: process.env.COOKIES_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        maxAge: 60 * 60 * 24, // 1 days
        secure: process.env.NODE_ENV === "production",
    },
};

export function withApiSession(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

export function session(handler) {
    return withIronSessionSsr(handler, sessionOptions);
}