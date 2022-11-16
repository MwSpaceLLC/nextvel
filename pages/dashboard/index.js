import useUser from "../../resources/hooks/useUser";
import AppLayout from "../../resources/components/layout/AppLayout";
import Link from "next/link";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */
export {getServerSideProps} from "../../http/middleware/AuthServerSideProps"

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
                Ciao <i>{user?.name}</i> ! | <b><Link href="/auth/logout">Logout</Link></b>
            </div>
        </AppLayout>
    )
}
