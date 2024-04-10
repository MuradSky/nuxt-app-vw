<template>
    <footer>
        <div>{{ new Date().getFullYear() }} &copy; All rights reserved</div>
    </footer>
</template>
<style scoped>
    footer {
        background-color: var(--bs-primary);
        padding: 20px 32px;
        margin-top: auto;
    }

    footer div {
        text-align: center;
        color: var(--bs-light);
        font-size: 20px;
    }
</style>