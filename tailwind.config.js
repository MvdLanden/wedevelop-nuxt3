/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.{js,vue}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.js", "./nuxt.config.js", "./app.vue"],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [],
};
