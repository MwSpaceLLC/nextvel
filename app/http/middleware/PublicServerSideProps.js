import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {session} from "../../helpers/session";

export const getServerSideProps = session(
    async function getServerSideProps({req, locale}) {

        //TODO: make stuff

        return {
            props: {
                ...(await serverSideTranslations(locale, ['common'])),
            },
        };
    }
);