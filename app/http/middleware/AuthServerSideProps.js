import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {session} from "../../helpers/session";
import {prisma} from "../../helpers/database";

export const getServerSideProps = session(
    async function getServerSideProps({req, locale}) {

        // check with sql query
        if (!await prisma.user.findUnique({where: {id: req.session?.user?.id || 0}})) return {
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