import {useTranslation} from 'next-i18next';

import {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {useRouter} from 'next/router'
import axios from "axios";

import ErrorsAlert from "../../resources/components/layout/ErrorsAlert";
import useApi from "../../resources/hooks/useApi";

import useUser from "../../resources/hooks/useUser";
import AppLayout from "../../resources/components/layout/AppLayout";
import useCredentials from "../../resources/hooks/useCredentials";
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
export default function Logout() {

    const api = useApi();
    const router = useRouter()
    const {t} = useTranslation();

    const [load, setLoad] = useState(false);
    const [error, setError] = useState({});

    const [user, loggedIn] = useUser();


    /**
     *
     * @param evt
     * @constructor
     */
    const Submit = async (evt) => {

        setLoad(true)
        evt.preventDefault();

        const credentials = useCredentials(evt.target); // pass target if needed

        try {

            await axios.post(api, credentials);
            await router.push('/auth/login');

        } catch ({response}) {
            setError(response)
        }

        setLoad(false);

    }
    return (

        <AppLayout>
            <img src="/beams-components.png" className="fixed z-0" alt="bg"/>

            <div className="relative z-30 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-2xl font-extrabold text-gray-900">

                        <Link href="/">
                            <ChevronLeftIcon className="h-6 w-6 text-app"/>
                        </Link>

                        Logout <b>{user?.name}</b>
                    </h2>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="py-8 px-4 sm:px-10">
                        <form className="space-y-6" onSubmit={Submit} method="POST">

                            <div>
                                <button
                                    disabled={load}
                                    type="submit"
                                    className={(load ? 'animate-pulse' : '') + " w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-app hover:bg-app focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"}>
                                    {load ? '⚪⚪⚪' : 'Disconnetti'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

                <ErrorsAlert onClose={e => setError({})} res={error}/>

            </div>
        </AppLayout>
    )
}
