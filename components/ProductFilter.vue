<script setup lang="ts">
    const category = [
        { label: 'Hatchback', name: 'category', value: 'hatchback' },
        { label: 'SUV', name: 'category', value: 'suv' },
        { label: 'Variant', name: 'category', value: 'variant' }
    ]
    const engineType = [
        { label: 'Бензин', name: 'engine-type', value: 'gasoline' },
        { label: 'Mild-Hybrid', name: 'engine-type', value: 'mild-hybrid' },
        { label: 'Дизель', name: 'engine-type', value: 'diesel' }
    ]

    const color = [
        { label: 'Белый', name: 'color', value: 'white' },
        { label: 'Красный', name: 'color', value: 'red' },
        { label: 'Синий', name: 'color', value: 'blue' },
        { label: 'Желтый', name: 'color', value: 'yellow' },
        { label: 'Серый', name: 'color', value: 'grey' },
    ]
</script>

<template>
    <form @submit.prevent="console.log" :class="cn.filter">
        <div :class="cn.list">
            <h4>Категория</h4>
            <ul>
                <li v-for="item in category" :key="item.label">
                    <Checkbox 
                        :name="item.name" 
                        :label="item.label"
                    />
                </li>
            </ul>
        </div>

        <div :class="cn.list">
            <h4>Тип двигателя</h4>
            <ul>
                <li v-for="item in engineType" :key="item.label">
                    <Checkbox 
                        :name="item.name" 
                        :label="item.label"
                    />
                </li>
            </ul>
        </div>

        <div :class="cn.list">
            <h4>Цвет</h4>
            <ul>
                <li v-for="item in color" :key="item.label">
                    <RadioButton 
                        :name="item.name" 
                        :label="item.label"
                    />
                </li>
            </ul>
        </div>

        <button>Применить</button>
    </form>
</template>

<style scoped module="cn">
    .filter {
        border: 1px solid var(--cl-grey);
        border-radius: 10px;
        padding: 20px;
    }

    .filter ul {
        list-style: none;
        padding: 0;

    }

    .filter .list:not(:first-child) {
        border-top: 1px solid var(--cl-grey);
    }

    .filter .list li {
        margin-bottom: 10px;
    }

    .filter button {
        background: var(--cl-blue);
        text-decoration: none;
        width: 100%;
        padding: 10px;
        text-align: center;
        display: block;
        border-radius: 30px;
        color: var(--cl-white);
        transition: background .2s linear;
        cursor: pointer;
        border: 0;
        margin-top: 32px;
    }

    .filter button:hover {
        background: var(--cl-blue-h);
    }
</style>