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
                    { name: "Oplossingen", slug: "websites/oplossingen" },
                    { name: "De Perfecte Website", slug: "websites/de-perfecte-website" },
                    { name: "Silverstripe CMS", slug: "websites/silverstripe-cms" },
                    { name: "Vindbaarheid", slug: "websites/vindbaarheid" },
                    { name: "Inzichten", slug: "websites/inzichten" },
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
                    { name: "Job A", slug: "werken-bij/job-a" },
                    { name: "Job B", slug: "werken-bij/job-b" },
                ],
            },
        ],
    };
</script>
