 import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {prisma} from "../../helpers/database";
import {createSessionId, withSession} from "../../helpers/session";
import app from "../../config/app";

export const getServerSideProps = withSession(
    async function getServerSideProps({query, req, res, locale}) {

        await createSessionId(req.session);

        const admin = await prisma.admin.findUnique({where: {id: req.session?.admin?.id || 0}});

        // check with sql query auth && backend token
        if (app.token !== query.token || !admin) return {
            notFound: true //TODO: make stuff
        }

        return {
            props: {
                admin: admin,
                token: query.token,
                ...(await serverSideTranslations(locale, ['common']))
            },
        };
    }
);