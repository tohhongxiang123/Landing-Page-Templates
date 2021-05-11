module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3']
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}