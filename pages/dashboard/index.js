/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

import useUser from "../../resources/hooks/useUser";
import AppLayout from "../../resources/components/layout/AppLayout";

export {getServerSideProps} from "../../app/http/middleware/AuthServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function Dashboard() {

    const [user, loggedIn] = useUser();

    return (
        <AppLayout title={user?.name}>
            <div>
                Ciao <i>{user?.name}</i> ! | <b><a href="/api/auth/logout">Logout</a></b>
            </div>
        </AppLayout>
    )
}
