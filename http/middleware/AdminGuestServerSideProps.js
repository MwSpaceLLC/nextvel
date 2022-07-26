import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {createSessionId, withSession} from "../../helpers/session";
import {prisma} from "../../helpers/database";
import app from "../../config/app";

export const getServerSideProps = withSession(
    async function getServerSideProps({query, req, locale}) {

        await createSessionId(req.session);

        // check with sql query auth && backend token
        if (
            app.token !== query.token ||
            await prisma.admin.findUnique({where: {id: req.session?.admin?.id || 0}})
        ) return {
            notFound: true //TODO: make stuff
        }

        return {
            props: {
                token: query.token,
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);