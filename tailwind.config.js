/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        screens: {
            mobile: '0px',
            tablet: '768px',
            laptop: '992px',
            desktop: '1200px',
        },
        extend: {
            colors: {
                'accent-1': '#fff5f5',
                'primary-btn': '#454545',
            },
        },
    },
    plugins: [],
};
