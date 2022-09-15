import {useTranslation} from 'next-i18next';

import {useState} from "react";
import Link from "next/link";

import {useRouter} from 'next/router'
import axios from "axios";
import ErrorsAlert from "../../resources/components/layout/ErrorsAlert";
import useApi from "../../resources/hooks/useApi";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

export {getServerSideProps} from "../../app/http/middleware/GuestServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function Login({csrfToken}) {

    const api = useApi();
    const router = useRouter()
    const {t} = useTranslation();

    const [load, setLoad] = useState(false);
    const [res, setRes] = useState({});

    /**
     *
     * @param evt
     * @param credentials
     * @constructor
     */
    const Submit = (evt, credentials = {}) => {

        setLoad(true)
        evt.preventDefault();

        evt.target.querySelectorAll('input').forEach(item => Object.assign(credentials, {[item.name]: item.value}))

        axios.post(api, credentials)
            .then(() => router.push('/dashboard'))
            .catch(({response}) => setRes(response))
            .finally(() => setLoad(false))

    }

    return (

        <>
            <img src="/beams-components.png" className="fixed z-0" alt="bg"/>

            <div className="relative z-30 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-3xl font-extrabold text-gray-900">
                        <Link href="/">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-app" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                                </svg>
                            </a>
                        </Link>

                        Log in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Oppure

                        <Link href="/auth/register">
                            <a className="ml-1 font-medium underline text-app hover:text-app">
                                Start free today
                            </a>
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
                                    {res.status && (
                                        <Link href="/auth/forgot">
                                            <a className="font-medium text-app hover:text-app">
                                                Forgot password?
                                            </a>
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

                <ErrorsAlert onClose={e => setRes({})} res={res}/>

            </div>
        </>
    )
}
