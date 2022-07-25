import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {prisma} from "../../helpers/database";
import {session} from "../../helpers/session";

export const getServerSideProps = session(
    async function getServerSideProps({query, req, res, locale}) {

        // check with sql query auth && backend token
        if (
            process.env.ADMIN_BACKEND_TOKEN !== query.token &&
            !await prisma.admin.findUnique({where: {id: req.session?.user?.id || 0}})
        ) return {
            redirect: {
                notFound: true //TODO: make stuff
            }
        }

        return {
            props: {
                token: query.token,
                ...(await serverSideTranslations(locale, ['common']))
            },
        };
    }
);