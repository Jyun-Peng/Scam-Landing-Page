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
                red_hover: '#e43e5c',
                red_active: '#d63c58',
                mask: 'rgba(0, 0, 0, 0.5)',
            },
            flex: {
                half: '1 1 50%',
                '1/3': '1 1 33.33333%',
                full: '1 1 100%',
            },
            fontSize: {
                xxl: ['4rem', '1'],
                xxl_mobile: ['3.5rem', '1'],
                xl: ['3rem', '1'],
                xl_mobile: ['2.6rem', '1'],
                lg: ['1.6rem', '1'],
                lg_mobile: ['1.4rem', '1'],
                md: ['1.2rem', '1'],
                para: ['1.2rem', '1.5'],
                input: ['1.2rem', '2'],
                logo: ['1.8rem', '1'],
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
                phoneImg: 'url(./images/phone.png)',
            },
            backgroundPosition: {
                centerBottom: 'center bottom',
                centerTop: 'center top',
            },
            screens: {
                mobile: '414px',
                desktop: '768px',
            },
            transitionProperty: {
                header: 'left, transform',
            },
        },
    },
    plugins: [],
};
