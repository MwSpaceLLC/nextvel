import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {session} from "../../helpers/session";
import {prisma} from "../../helpers/database";

export const getServerSideProps = session(
    async function getServerSideProps({query, req, locale}) {

        // check with sql query auth && backend token
        if (
            process.env.ADMIN_BACKEND_TOKEN !== query.token &&
            await prisma.admin.findUnique({where: {id: req.session?.user?.id || 0}})
        ) return {
            redirect: {
                notFound: true //TODO: make stuff
            }
        }

        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);