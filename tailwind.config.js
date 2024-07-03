/** @type {import('tailwindcss').Config} */
export default {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
    theme: {
      colors: {
        black: "#1F2122",
        teal: "#90C8AF",
        green: "#4CA76C",
        white: "#FFFFFF",
        blue: "#025985",
        grey: "#AAADB1",
        red: "#AF2F2F",
        "light-grey": "#F6F7F8",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    plugins: [],
};
