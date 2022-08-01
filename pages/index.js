import styles from '../resources/styles/Page.module.css'

import {useTranslation} from "next-i18next";
import AppLayout from "../resources/components/layout/AppLayout";

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
        <AppLayout title={t('seo-index-description')} description={t('seo-index-description')}>
            <h1 className={styles.title}>
                {t('index-title')} <a href="https://nextjs.org">NextVel!</a>
            </h1>

            <p className={styles.description}>
                {t('index-description')} {' '}
                <code className={styles.code}>pages/index.js</code>

                | or |

                <a href="/auth/login" className={styles.code}>[login]</a>

                /
                <a href="/auth/register" className={styles.code}>[register]</a>

                /
                <a href="/auth/forgot" className={styles.code}>[forgot]</a>
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
        </AppLayout>
    )
}