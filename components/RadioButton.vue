<script setup lang="ts">
    interface Props {
        checked?: boolean,
        label: string,
        name: string,
        disabled?: boolean
    }

    defineProps<Props>()
</script>


<template>
    <label :class="cn.radio">
        <input type="radio" :name="name" :disabled="disabled" :checked="checked">
        <i>
            
        </i>
        <span>{{ label }}</span>
    </label>
</template>

<style scoped module="cn">
    .radio {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .radio:hover i {
        border-color: var(--cl-blue-h);
    }

    .radio input {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
    }

    .radio input:checked ~ i {
        background-color: var(--cl-blue);
        border-color: var(--cl-white);
        border-width: 3px;
        outline: 2px solid var(--cl-blue-h);
    }

    .radio input:checked ~ i svg {
        opacity: 1;
    }

    .radio i {
        width: 20px;
        min-width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #aaa;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: border .2s linear, background .2s linear;
    }

    .radio i svg {
        width: 10px;
        height: 10px;
        color: var(--cl-white);
        opacity: 0;
        transition: opacity .2s linear;
    }

    .radio span {
        font-size: 16px;
        margin-left: 5px;
    }
</style>