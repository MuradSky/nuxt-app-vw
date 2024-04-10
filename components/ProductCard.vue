<script setup lang="ts">
    interface Card {
        className?: string,
        viewType: string,
        data: {
            color: string,
            name: string,
            slug: string,
            image: string,          
            price: number,
            engine: string,
            equipment: string,
            description: string,
            is_new: boolean,
            category: string
        }
    }

    const props = defineProps<Card>()
</script>

<template>
    <div :class="[cn.card, props.className, viewType === 'row' ? cn.is_row : '' ]">
        <NuxtLink :class="[cn.card_img, cn[props.data.color]]" :to="'/product/'+props.data.slug">
            <picture>
                <img :src="props.data.image" alt="" width="280" height="110">
            </picture>

            <div :class="cn.card_new" v-if="props.data.is_new">
                <svg role="img" aria-label="Yeni" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="m9 11.51-3-2.1-3 2.1-1-.74 1.05-3.51L.12 5l.39-1.2 3.68-.07L5.4.3h1.25l1.21 3.47 3.68.07.39 1.16L9 7.26l1.06 3.51zM5.64 8.06h.76l1.83 1.27-.64-2.13.23-.72L9.6 5.13H7.37l-.61-.45L6 2.54l-.73 2.1-.61.45H2.43l1.8 1.39.23.72-.64 2.13z"></path></svg>
                Новинка
            </div>
        </NuxtLink>
        <div :class="cn.card_body">
            <div :class="cn.card_name">
                {{ props.data.name }}
            </div>

            <div :class="cn.card_price">
                {{ numberWithCommas(props.data.price) }} $
            </div>

            <NuxtLink :class="cn.card_link" :to="'/product/'+props.data.slug">
                Изучить модель
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped module="cn">
    .card {
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }

    .card.is_row {
        display: flex;
    }

    .card.is_row .card_body {
        flex: auto;
        border-radius:  0 10px 10px 0;
        display: flex;
        align-items: flex-start;
    }

    .card.is_row .card_link {
        width: auto;
        margin-left: auto;
    }

    .card.is_row .card_name {
        margin-right: 24px;
    }

    .card_body {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius:  0 0 10px 10px;
    }

    .card_new {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 4px;
        background-color: rgb(0, 230, 230);
    }

    .card_new svg {
        margin-right: 5px;
    }

    .card_link {
        background: var(--cl-blue);
        text-decoration: none;
        width: 100%;
        padding: 10px;
        text-align: center;
        display: block;
        border-radius: 30px;
        color: var(--cl-white);
        transition: background .2s linear;
    }

    .card_link:hover {
        background: var(--cl-blue-h);
    }

    .card_img {
        display: block;
        min-height: 150px;
        display: flex;
        align-items: flex-end;
        position: relative;
    }

    .card_name {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .card_price {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 24px;
    }

    .blue {
        background: rgb(28, 42, 105);
    }

    .yellow {
        background: rgb(195, 176, 53);
    }

    .red {
        background: rgb(181, 33, 20);
    }

    .light-blue {
        background: rgb(123, 151, 189);
    }

    .grey {
        background: rgb(206, 204, 195);
    }

    .metal-blue {
        background: rgb(171, 178, 186);
    }

    .light {
        background: rgb(222, 222, 222);
    }
</style>