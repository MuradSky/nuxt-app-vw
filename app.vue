<script setup lang="ts">
    useHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: ''
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap',
            }
        ]
    })
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>

    .page-enter-active,
    .page-leave-active {
        transition: all 0.3s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        transform: scale(0.95);
    }
</style>