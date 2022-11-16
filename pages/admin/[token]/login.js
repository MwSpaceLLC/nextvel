import {Fragment, useEffect, useRef, useState} from 'react'

import axios from "axios";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import useApi from "../../../resources/hooks/useApi";

import ErrorsAlert from "../../../resources/components/layout/ErrorsAlert";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

// This is middleware for index
export {getServerSideProps} from "../../../http/middleware/AdminGuestServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function AdminLogin({token}) {

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
            .then(e => router.push(window.location.pathname.replace('login', '')))
            .catch(({response}) => setRes(response))
            .finally(() => setLoad(false))

    }

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <img src="/beams-components.png" className="fixed z-0" alt="bg"/>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Accesso spazio admin</h2>
            </div>

            <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="py-8 px-4 sm:rounded-lg sm:px-10">
                    <form onSubmit={Submit} className="space-y-6" method="post">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Indirizzo e-mail
                            </label>
                            <div className="mt-1">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
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
                                    type="password"
                                    name="password"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-app focus:border-app sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-app hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"
                            >
                                {load ? '⚪⚪⚪' : 'Accedi'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <ErrorsAlert res={res} setRes={setRes}/>

        </div>
    )
}