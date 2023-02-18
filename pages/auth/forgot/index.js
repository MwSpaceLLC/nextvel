import {useTranslation} from 'next-i18next';

import {useState} from "react";
import Link from "next/link";
import axios from "axios";

import ErrorsAlert from "../../../resources/components/layout/ErrorsAlert";
import useApi from "../../../resources/hooks/useApi";
import SuccessAlert from "../../../resources/components/layout/SuccessAlert";
import useCredentials from "../../../resources/hooks/useCredentials";
import {ChevronLeftIcon} from "@heroicons/react/24/outline";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

export {getServerSideProps} from "../../../http/middleware/GuestServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function Forgot({}) {

    const api = useApi();

    const {t} = useTranslation();

    const [load, setLoad] = useState(false);
    const [error, setError] = useState({});

    const [sent, setSent] = useState(false);


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

        console.log(credentials)

        try {

            await axios.post(api, credentials);
            await setSent(true);

        } catch ({response}) {
            setError(response)
        }

        setLoad(false);

    }

    return (

        <>
            <img src="/beams-components.png" className="fixed z-0" alt="bg"/>

            <div className="relative z-30 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-md">

                    <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-3xl font-extrabold text-gray-900">

                        <Link href="/">
                            <ChevronLeftIcon className="h-6 w-6 text-app"/>
                        </Link>

                        Recupera la tua email
                    </h2>

                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="py-8 px-4 sm:px-10">
                        <form className="space-y-6" onSubmit={Submit} method="POST">

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Indirizzo e-mail
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
                                <button
                                    disabled={load}
                                    type="submit"
                                    className={(load ? 'animate-pulse' : '') + " w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-app hover:bg-app focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app"}>
                                    {load ? '⚪⚪⚪' : 'Invia reset'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>

                <SuccessAlert text="e-mail per il ripristino inviata" show={sent} onClose={() => setSent(false)}/>

                <ErrorsAlert onClose={e => setError({})} res={error}/>

            </div>
        </>
    )
}
