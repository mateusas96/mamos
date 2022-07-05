/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        screens: {
            mobile: '0px',
            tablet: '768px',
            laptop: '992px',
            desktop: '1200px',
            aboveGalaxyFold: '310px',
        },
        extend: {
            colors: {
                'accent-1': '#fff5f5',
                'white-transparent': '#ffffffcf',
            },
            width: {
                '1224px': '1224px',
            },
            borderRadius: {
                100: '100%',
            },
        },
    },
    plugins: [],
};
