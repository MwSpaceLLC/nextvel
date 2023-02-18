import Head from "next/head";
import AuthUserWrapper from "./AuthUserWrapper";

import NProgress from 'nprogress'
import {Router} from "next/router";

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done(true)
Router.onRouteChangeError = () => NProgress.done(true)

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */
export default function AppLayout({title, description, children}) {
    return (
        <AuthUserWrapper>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <>{children}</>

        </AuthUserWrapper>
    )
}