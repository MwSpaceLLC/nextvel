const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./resources/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                app: "#7f00be",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
}
