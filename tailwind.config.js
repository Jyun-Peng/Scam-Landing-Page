module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#333333',
                gray: '#dddddd',
                darkGray: '#555555',
                white: '#fefefe',
                cyan: '#3d5a80',
                red: '#ff4d6d',
                mask: 'rgba(0, 0, 0, 0.5)',
            },
            flex: {
                half: '1 1 50%',
            },
            fontSize: {
                xxl: ['4rem', '1'],
                xl: ['3rem', '1'],
                lg: ['2rem', '1'],
                md: ['1.2rem', '1'],
                para: ['1.2rem', '1.5'],
                input: ['1.2rem', '2'],
            },
            height: {
                screen: '90vh',
                hero: 'calc(100vh - 3.5rem)',
            },
            boxShadow: {
                thumbnail: 'inset 0 0 0 0.25rem #ff4d6d',
            },
            backgroundImage: {
                heroImg: "url('./images/hero.jpg')",
            },
            backgroundPosition: {
                centerBottom: 'center bottom',
            },
        },
    },
    plugins: [],
};
