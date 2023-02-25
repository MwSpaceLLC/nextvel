module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    name: 'NextVel',

    /*
    |--------------------------------------------------------------------------
    | Application Color
    |--------------------------------------------------------------------------
    |
    | This value is the color of your application. This value is used when the
    | framework needs to place the application's color in a notification or
    | any other location as required by the application or its packages.
    |
    */

    color: '#7f00be',

    /*
    |--------------------------------------------------------------------------
    | Application Url
    |--------------------------------------------------------------------------
    |
    | This value is the url of your application. This value is used when the
    | framework needs to place the application's url in a notification or
    | any other location as required by the application or its packages.
    |
    */

    url: process.env.APP_URL,

    /*
    |--------------------------------------------------------------------------
    | Application Admin token
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's token path in any location as
    | required by the application or its packages.
    |
    */

    token: process.env.COOKIES_PASSWORD?.toLowerCase(),

    /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the PHP date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

    timezone: 'Europe/Rome',

    /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */

    locale: 'it',

    /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | A salt is a random string that makes the hash unpredictable. Bcrypt is a
    | popular and trusted method for salt and hashing passwords. You have
    | learned how to use bcrypt's NodeJS library to salt and hash a password
    | before storing it in a database.
    |
    */

    salt: 10,

}