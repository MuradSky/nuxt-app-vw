<script setup lang="ts">
    interface Props {
        data: {
            to: string | null,
            title: string,
        }[]
    }
    defineProps<Props>()
</script>

<template>
    <ul :class="cn.bread_crumbs">
        <li>
            <NuxtLink to="/">Каталог</NuxtLink>
        </li>
        <li v-for="item in data" :key="item.title">
            <NuxtLink :to="item.to" v-if="item.to">{{ item.title }}</NuxtLink>
            <span v-else>{{ item.title }}</span>
        </li>
    </ul>
</template>

<style scoped module="cn">
    .bread_crumbs {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 5px 0;
        margin: 0;
        margin-left: -5px;
    }
    .bread_crumbs li {
        margin: 0;
        font-size: 16px;
    }

    .bread_crumbs li:not(:first-child)::before {
        content: "/";
        margin-right: 5px;
    }
    
    .bread_crumbs li a {
        padding: 5px;
        text-decoration: none;
        color: var(--cl-blue-h);
    }    
</style>