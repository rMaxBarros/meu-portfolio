/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                active: 'var(--text-active)',
                inactive: 'var(--text-inactive)',
                highlight: 'var(--highlight-color)',
                accent: 'var(--accent-color)',
                keyword: 'var(--link-keyword-color)',
            },
        },
    },
    plugins: [],
}
