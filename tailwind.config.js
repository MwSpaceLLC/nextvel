// const colors = require('tailwindcss/colors')
const {color} = require("./config/app");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./resources/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                app: color,
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
}
