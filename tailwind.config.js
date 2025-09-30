// tailwind.config.js
module.exports = {
    prefix: 'tw-',

    content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#00AC36', // Example OKLCH value

                green: {
                    500: '#00AC36',
                    600: '#00AC36',
                    700: '#00AC36',
                },
            },
        },
    },
    plugins: [],
};
