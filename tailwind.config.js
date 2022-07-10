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
                '300px': '300px',
                '250px': '250px',
                '200px': '200px',
            },
            borderRadius: {
                100: '100%',
            },
            boxShadow: {
                'bottom-2xl': '0 25px 50px -25px rgb(0 0 0 / 0.25);',
            },
            margin: {
                '23px': '23px',
            },
        },
    },
    plugins: [],
};
