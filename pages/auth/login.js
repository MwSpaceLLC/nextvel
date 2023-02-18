import {useState} from "react";
import Link from "next/link";

import {useRouter} from 'next/router'
import axios from "axios";
import ErrorsAlert from "../../resources/components/layout/ErrorsAlert";
import useApi from "../../resources/hooks/useApi";
import AppLayout from "../../resources/components/layout/AppLayout";
import useCredentials from "../../resources/hooks/useCredentials";
import {ChevronLeftIcon} from "@heroicons/react/24/outline";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

export {getServerSideProps} from "../../http/middleware/GuestServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function Login({}) {

    const api = useApi();
    const router = useRouter()

    const [load, setLoad] = useState(false);
    const [error, setError] = useState({});

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
            await router.push('/dashboard');

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

                    <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-3xl font-extrabold text-gray-900">

                        <Link href="/">
                            <ChevronLeftIcon className="h-6 w-6 text-app"/>
                        </Link>

                        Accedi al tuo account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Oppure

                        <Link href="/auth/register">
                            <span className="ml-1 font-medium underline text-app hover:text-app">
                                Inizia gratis oggi
                            </span>
                        </Link>

                    </p>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="py-8 px-4 sm:px-10">
                        <form className="space-y-6" onSubmit={Submit} method="POST">

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    e-mail address
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center"/>

                                <div className="text-sm">
                                    {error.status && (
                                        <Link href="/auth/forgot">
                                            <span className="font-medium text-app hover:text-app">
                                                Forgot password?
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div>
                                <button
                                    disabled={load}
                                    type="submit"
                                    className={(load ? 'animate-pulse' : '') + " w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-app hover:bg-app focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"}>
                                    {load ? '⚪⚪⚪' : 'Log in'}
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
