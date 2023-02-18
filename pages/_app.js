import '../resources/styles/App.global.css'
import '../resources/styles/Nprogress.css'

import {appWithTranslation} from 'next-i18next';
import {Provider} from 'react-redux'
import store from '../store'

/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */

export default appWithTranslation(({Component, pageProps}) => {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )

});