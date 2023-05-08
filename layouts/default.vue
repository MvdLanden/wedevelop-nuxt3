<template>
    <Header :isLight="header" :menu="menu"></Header>
    <slot />
    <Footer></Footer>
</template>

<script setup>
    const header = useHeaderLight();

    // DB
    const menu = {
        primary: [
            {
                name: "Websites",
                slug: "websites",
                children: [
                    { name: "Oplossingen", slug: "oplossingen" },
                    { name: "De Perfecte Website", slug: "de-perfecte-website" },
                    { name: "Silverstripe CMS", slug: "silverstripe-cms" },
                    { name: "Vindbaarheid", slug: "vindbaarheid" },
                    { name: "Inzichten", slug: "inzichten" },
                ],
            },
            { name: "Business Applicaties", slug: "business-applicaties" },
            { name: "Integraties", slug: "integraties" },
        ],
        secondary: [
            { name: "Cases", slug: "cases" },
            { name: "Ons verhaal", slug: "ons-verhaal" },
            { name: "Blog", slug: "blog" },
            {
                name: "Werken bij",
                slug: "werken-bij",
                children: [
                    { name: "Job A", slug: "job-a" },
                    { name: "Job B", slug: "job-b" },
                ],
            },
        ],
    };
</script>
