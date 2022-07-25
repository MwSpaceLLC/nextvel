require('dotenv').config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    secure: process.env.MAIL_SECURE.toLowerCase() === 'true',
    tls: {rejectUnauthorized: false}
})

export default function nodemail(to, subject, html, callback) {

    return transporter.sendMail({
            from: `wogha <${process.env.MAIL_FROM_ADDRESS}>`,
            to: to,
            subject: subject,
            text: html.replace(/<[^>]*>?/gm, ' '),
            html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="supported-color-schemes" content="light">
            <meta name="color-scheme" content="light">
            <title>${`wogha <${process.env.MAIL_FROM_ADDRESS}>`}</title>
            <style>
              @media only screen and (max-width: 600px) {
                .inner-body {
                  width: 100% !important;
                }
                .footer {
                  width: 100% !important;
                }
              }
              @media only screen and (max-width: 500px) {
                .button {
                  width: 100% !important;
                }
              }
            </style>
          </head>
          <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
            ${html}
          </body>
        </html>`
        },
        callback
    )
}