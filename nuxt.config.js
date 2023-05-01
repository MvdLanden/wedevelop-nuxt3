// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: "Default title",
            meta: [{ name: "description", content: "Lorem ipsum" }, { headerClass: "light" }],
        },
    },
});
