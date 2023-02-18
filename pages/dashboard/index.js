import useUser from "../../resources/hooks/useUser";
import AppLayout from "../../resources/components/layout/AppLayout";
import Link from "next/link";
import {ChevronLeftIcon} from "@heroicons/react/24/outline";

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
            <div className="w-full flex items-center justify-center h-screen text-2xl gap-2">

                <Link href="/">
                    <ChevronLeftIcon className="h-6 w-6 text-app"/>
                </Link>

                Ciao <i>{user?.name}</i> ! | <b className="bg-gray-50 p-1"><Link href="/auth/logout">[Logout]</Link></b>
            </div>
        </AppLayout>
    )
}
