import {useTranslation} from "next-i18next";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

// This is middleware for index
export {getServerSideProps} from "../../../app/http/middleware/AuthServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function AdminIndex() {

    const {t} = useTranslation();

    return (
        <section>
            Dashboard
        </section>
    )
}