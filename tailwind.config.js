/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            animation: {
                'loop-scroll': 'loop-scroll 25s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            colors: {
                'c-white': '#FFFFFF',
                'c-black': '#1F2122',
                'c-teal': '#90C8AF',
                'c-green': '#4CA76C',
                'c-blue': '#025985',
                'c-grey': '#AAADB1',
                'c-red': '#AF2F2F',
                'c-light-grey': '#F6F7F8',
            },
        },
        fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
        },
    },
};
