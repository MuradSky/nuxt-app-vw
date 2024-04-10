<template>
    <AppHeader />
    <main class="main">
        <slot />
    </main>
    <AppFooter />
</template>

<style>
    :root {
        --cl-white: #fff;
        --cl-teal: #008080; 
        --cl-red: #B03060;
        --cl-red: #B03060;
        --cl-blue: #0E6EB8;
        --cl-blue-h: #024374;
        --cl-grey: #aaa;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    body {
        font-family: "Roboto", sans-serif !important;
    }

    #__nuxt {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        /* min-height: 100vh; */
    }
    .main {
        flex: auto;
        padding: 32px 0;
    }
</style>