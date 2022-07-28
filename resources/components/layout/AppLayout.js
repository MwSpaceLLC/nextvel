import styles from "../../styles/Page.module.css";
import Head from "next/head";
import Image from "next/image";

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */
export default function AppLayout({title, description, children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                {children}
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