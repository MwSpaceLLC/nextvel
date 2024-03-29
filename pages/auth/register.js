import {useTranslation} from 'next-i18next';

import {useState} from "react";

import axios from "axios";
import {useRouter} from 'next/router'
import ErrorsAlert from "../../resources/components/layout/ErrorsAlert";

import useApi from "../../resources/hooks/useApi";
import Link from "next/link";
import AppLayout from "../../resources/components/layout/AppLayout";
import useCredentials from "../../resources/hooks/useCredentials";

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
export default function Register({}) {

    const api = useApi();
    const router = useRouter()
    const {t} = useTranslation();

    const [load, setLoad] = useState(false);
    const [error, setError] = useState({});

    /**
     *
     * @param evt
     * @returns {Promise<void>}
     * @constructor
     */
    const Submit = async (evt) => {

        setLoad(true)
        evt.preventDefault();

        const credentials = useCredentials(evt.target); // pass target if needed

        if (credentials.password !== credentials._password) {
            return setLoad(false) + setError({status: 422, statusText: 'Errore corrispondenza conferma password'})
        }

        try {

            await axios.post(api, credentials);
            await router.push('/auth/confirm');

        } catch ({response}) {
            setError(response)
        }

        setLoad(false);

    }

    return (
        <AppLayout>
            <div className="min-h-screen flex">
                <div className="hidden lg:block relative w-0 flex-1">
                    <img
                        className="absolute pointer-events-none inset-0 h-full w-full object-cover"
                        src="/beams-components.png"
                        alt=""
                    />
                </div>

                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-32">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src="/logo.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Registrati gratuitamente
                                oggi!</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Oppure{' '}
                                <Link href="/auth/login" className="font-medium text-app hover:text-app">
                                    Accedi al tuo account
                                </Link>
                            </p>
                        </div>

                        <div className="mt-8">

                            <div className="mt-6">
                                <form onSubmit={Submit} method="POST" className="space-y-6">

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Il tuo nome completo
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                required={true}
                                                name="name"
                                                type="text"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Indirizzo e-mail
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                required={true}
                                                name="email"
                                                type="email"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                required={true}
                                                name="password"
                                                type="password"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Conferma Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                required={true}
                                                name="_password"
                                                type="password"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-app hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"
                                        >
                                            {load ? '⚪⚪⚪' : 'Registrati'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <ErrorsAlert onClose={e => setError({})} res={error}/>
            </div>
        </AppLayout>
    )
}
