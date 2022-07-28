import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {createSessionId, csrf, tokenIsExpired, withSession} from "../../helpers/session";
import {prisma} from "../../helpers/database";

export const getServerSideProps = withSession(
    async function getServerSideProps({query, req, locale}) {

        await csrf(req); // generate csrf
        await createSessionId(req.session);

        // get token in to a database
        const token = await prisma.token.findUnique({where: {hash: query.hash}});

        // block request if token mismatch or expired
        if (!token || tokenIsExpired(token)) return {
            notFound: true
        }

        return {
            props: {
                csrfToken: req.csrfToken(),
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);