<script setup lang="ts">
    const route = useRoute()
    const { data } = await useFetch(`/api/product/${route.params.slug}`)
    const breadcrumbs = [
        { to: null, title: data.value?.product?.name }
    ]
</script>

<template>
    <div :class="cn.detail">
        <div :class="cn.image">
            <img :src="data.product.wallpaper" alt="">
        </div>
        <div class="container">
            <h1>
                {{  data.product.name  }}
                <span :class="cn.is_new" v-if="data.product.is_new">
                    <svg role="img" aria-label="Yeni" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="m9 11.51-3-2.1-3 2.1-1-.74 1.05-3.51L.12 5l.39-1.2 3.68-.07L5.4.3h1.25l1.21 3.47 3.68.07.39 1.16L9 7.26l1.06 3.51zM5.64 8.06h.76l1.83 1.27-.64-2.13.23-.72L9.6 5.13H7.37l-.61-.45L6 2.54l-.73 2.1-.61.45H2.43l1.8 1.39.23.72-.64 2.13z"></path></svg>
                    Новинка
                </span>
            </h1>
        </div>
        <hr>
        <div class="container">
            <BreadCrumbs :data="breadcrumbs" />
            <div :class="cn.chars">
                <div :class="cn.chars_item" tabindex="0">
                    <span>Начальная цена:</span>
                    <b>{{ numberWithCommas(data.product.price) }} $</b>
                </div>
                <div :class="cn.chars_item" tabindex="0">
                    <span>Двигатели:</span>
                    <b>{{ data.product.engine }}</b>
                </div>
                <div :class="cn.chars_item" tabindex="0">
                    <span>Уровни оборудования:</span>
                    <b>{{ data.product.equipment }}</b>
                </div>
            </div>
            <div :class="cn.desc">
                <h3>Описане:</h3>
                <p>
                    {{ data.product.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped module="cn">
    .detail {
        margin-top: -110px;
    }

    .detail h1 {
        margin: 0;
        padding: 20px 0;
        font-size: 45px;
        position: relative;
        display: inline-block;
    }

    .is_new {
        position: absolute;
        top: 15px;
        right: -90px;
        z-index: 100;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 4px;
        background-color: rgb(0, 230, 230);
    }

    .is_new svg {
        margin-right: 5px;
    }

    .detail hr {
        border-bottom: 1px solid rgba(0, 30, 80, .4);
    }

    .image {
        height: 60vh;
    }

    .image img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

    .chars {
        display: flex;
        padding-top: 32px;
        gap: 14px;
    }

    .chars_item {
        display: flex;
        flex-direction: column;
        width: 28%;
        border-radius: 8px;
        border: 1px solid rgb(194, 202, 207);
        padding: 12px;
        min-height: 120px;
    }

    .chars_item:focus {
        outline: rgb(0, 64, 197) solid 2px;
        outline-offset: -2px;
    }

    .chars_item span {
        color: rgb(0, 14, 38);
        font-weight: normal;
        font-size: 0.88rem;
        line-height: 150%;
        letter-spacing: calc(-0.02em + 0.02rem);
        margin-bottom: 10px;
    }

    .chars_item b {
        color: rgb(0, 14, 38);
        font-size: clamp(1.25rem, 1.15rem + 0.29vw, 1.5rem);
        font-weight: 700;
        line-height: 120%;
        letter-spacing: calc(-0.02em + 0.02rem);
    }

    .desc {
        padding: 32px 0 64px;
        max-width: 900px;
        margin: 0 auto;
    }
</style>