module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#333333',
                gray: '#dddddd',
                darkGray: '#555555',
                white: '#fefefe',
                cyan: '#00e8cc',
            },
            flex: {
                half: '1 1 50%',
            },
            fontSize: {
                lg: ['3rem', '1'],
                md: ['1.5rem', '1'],
                input: ['1.2rem', '2'],
            },
            height: {
                screen: '90vh',
            },
        },
    },
    plugins: [],
};
