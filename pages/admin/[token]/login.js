import {Fragment, useEffect, useRef, useState} from 'react'

import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

import Link from "next/link";
import axios from "axios";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

// This is middleware for index
export {getServerSideProps} from "../../../app/http/middleware/GuestServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |--------------------------------------------------------------------------
 */
export default function AdminLogin() {
    const {t} = useTranslation();
    const router = useRouter()

    const email = useRef();
    const password = useRef();

    const [loader, setLoader] = useState(false);
    const [res, setRes] = useState({});

    const AuthPost = (evt) => {
        setLoader(true)

        evt.preventDefault()

        const credentials = {
            email: email.current.value,
            password: password.current.value
        };

        axios.post(`/api/${window.location.pathname}`, credentials)
            .then(() => router.push(window.location.pathname))
    }

    useEffect(() => {
        document.querySelector("html").classList.add("h-full", "bg-gray-100")
        document.querySelector("body").classList.add("h-full")
    });

    return (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <h2 className="mt-6 flex items-center gap-2 text-center justify-center text-3xl font-extrabold text-gray-900">
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>
                        </a>
                    </Link>

                    Login to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={AuthPost} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                e-mail address
                            </label>
                            <div className="mt-1">
                                <input
                                    ref={email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    disabled={loader}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    ref={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    disabled={loader}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    disabled={loader}
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded-full"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loader}
                                type="submit"
                                className={(loader ? 'animate-pulse' : '') + " w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}>
                                {loader ? '⚪⚪⚪' : 'Sign in'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            {!res.status ? '' : <ErrorsAlert onClose={e => setRes({})} res={res}/>}
        </div>
    )
}