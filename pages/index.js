import styles from '../resources/styles/Page.module.css'

import {useTranslation} from "next-i18next";
import AppLayout from "../resources/components/layout/AppLayout";
import Link from "next/link";
import useUser from "../resources/hooks/useUser";
import Image from "next/image";

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

// This is middleware for index
export {getServerSideProps} from "../http/middleware/PublicServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */
export default function Index() {

    const [user, loggedIn] = useUser();
    const {t} = useTranslation();

    return (
        <AppLayout title={t('seo-index-title')} description={t('seo-index-description')}>

            <div className={styles.container}>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        {t('index-title')} <a href="https://nextjs.org">NextVel!</a>
                    </h1>

                    <p className={styles.description}>
                        {t('index-description')} {' '}
                        <code className={styles.code}>pages/index.js</code>

                        | or |

                        {loggedIn ? (
                            <Link href="/dashboard" className={styles.code}>[dashboard]</Link>
                        ) : (
                            <>
                                <Link href="/auth/login" className={styles.code}>[login]</Link>

                                /
                                <Link href="/auth/register" className={styles.code}>[register]</Link>

                                /
                                <Link href="/auth/forgot" className={styles.code}>[forgot]</Link>
                            </>
                        )}
                    </p>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation &rarr;</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h2>Learn &rarr;</h2>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className={styles.card}
                        >
                            <h2>Examples &rarr;</h2>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h2>Deploy &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://mwspace.com/it"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by
                        <div className={styles.logo}>
                            <Image src="/logo.svg" alt="Logo" width={30} height={30}/>
                        </div>
                    </a>
                </footer>
            </div>
        </AppLayout>
    )
}