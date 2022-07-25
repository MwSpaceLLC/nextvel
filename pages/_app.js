import '../resources/styles/App.global.css'

import {appWithTranslation} from 'next-i18next';

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */

export default appWithTranslation(({Component, pageProps}) => {
    return (
        <Component {...pageProps} />
    )
});