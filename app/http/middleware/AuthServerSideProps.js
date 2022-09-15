import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {createSessionId, withSession} from "../../helpers/session";
import {prisma} from "../../helpers/database";

export const getServerSideProps = withSession(
    async function getServerSideProps({req, locale}) {

        await createSessionId(req.session);

        // check with sql query
        if (!await prisma.user.findUnique({where: {id: req.session?.user?.id || 0}})) return {
            notFound: true //TODO: make stuff
        }

        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);