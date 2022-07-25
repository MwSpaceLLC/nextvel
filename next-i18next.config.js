const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'it',
        locales: ['it', 'en'],
        localePath: path.resolve('./public/locales')
    },
};