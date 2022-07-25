import styles from '../resources/styles/Page.module.css'

import {useTranslation} from "next-i18next";
import Head from 'next/head'
import Image from 'next/image'

/**
 |--------------------------------------------------------------------------
 | Export default Middleware |
 |----------------------------------------------------------------------- */

// This is middleware for index
export {getServerSideProps} from "../app/http/middleware/PublicServerSideProps"

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */
export default function Index() {

    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <title>{t('seo-index-title')}</title>
                <meta name="description" content={t('seo-index-description')}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {t('index-title')} <a href="https://nextjs.org">NextVel!</a>
                </h1>

                <p className={styles.description}>
                    {t('index-description')} {' '}
                    <code className={styles.code}>pages/index.js</code>
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
                    Powered by {' '}
                    <div className={styles.logo}>
                        <Image src="/logo.svg" alt="Logo" width={72} height={16}/>
                    </div>
                </a>
            </footer>
        </div>
    )
}