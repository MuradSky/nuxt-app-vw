<script setup lang="ts">
    const { data }: any = await useFetch('/api/products')
    
    const view = ref('grid') 

    const updateView = (state: string)=> {
        view.value = state
    } 
</script>

<template>
   <div class="container">
        <h1>Все модели</h1>

        <div :class="cn.wrap">
            <div :class="cn.wrap_item">
                <ProductFilter />
            </div>
            <div :class="cn.wrap_item">
                <div :class="cn.sorter">
                    <SwitchView @change="updateView" :viewType="view" />
                </div>
                <div :class="[cn.grid, view === 'row' ? cn.is_row : '']">
                    <ProductCard 
                        v-for="item in data.products" 
                        :data="item"
                        :viewType="view"
                        :key="item._id"
                    />
                </div>
            </div>
        </div>
   </div>
</template>

<style scoped module="cn">
    .wrap {
        display: flex
    }

    .wrap_item:first-child {
        min-width: 300px;
        max-width: 300px;
        margin-right: 32px;
    }

    .wrap_item:last-child {
        flex: auto;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }

    .sorter {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
    }

    .grid.is_row {
        grid-template-columns: 1fr;
    }
</style>
