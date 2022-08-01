import useUser from "../../resources/hooks/useUser";
import AppLayout from "../../resources/components/layout/AppLayout";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */
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
                Ciao <i>{user?.name}</i> ! | <b><a href="/uth/logout">Logout</a></b>
            </div>
        </AppLayout>
    )
}
