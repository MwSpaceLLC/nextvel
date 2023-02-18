import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {createSessionId, withSession} from "../../helpers/session";

export const getServerSideProps = withSession(
    async function getServerSideProps({req, locale}) {

        console.log(req.session)

        //TODO: make stuff

        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);