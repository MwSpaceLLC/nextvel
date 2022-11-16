import {useTranslation} from 'next-i18next';

import {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {useRouter} from 'next/router'
import axios from "axios";

import ErrorsAlert from "../../resources/components/layout/ErrorsAlert";
import useApi from "../../resources/hooks/useApi";

import useUser from "../../resources/hooks/useUser";

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
    const [res, setRes] = useState({});

    const [user, loggedIn] = useUser();

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
            .then(() => router.push('/auth/login'))
            .catch(({response}) => setRes(response))
            .finally(() => setLoad(false))

    }

    return (

        <>
            <img src="/beams-components.png" className="fixed z-0" alt="bg"/>

            <div className="relative z-30 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-2xl font-extrabold text-gray-900">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-app" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>
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

                <ErrorsAlert onClose={e => setRes({})} res={res}/>

            </div>
        </>
    )
}
