/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'], // Replace default sans with Montserrat
            },
            
        },
    },
    plugins: [],
}