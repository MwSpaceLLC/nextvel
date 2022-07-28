import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {createSessionId, csrf, withSession} from "../../helpers/session";

export const getServerSideProps = withSession(
    async function getServerSideProps({req, locale}) {
        await csrf(req); // generate csrf

        await createSessionId(req.session);

        //TODO: make stuff

        return {
            props: {
                csrfToken: req.csrfToken(),
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);