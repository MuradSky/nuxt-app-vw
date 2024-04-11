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
    <label :class="cn.checkbox">
        <input type="checkbox" :name="name" :disabled="disabled" :checked="checked">
        <i>
            <svg fill="currentColor" height="14px" width="14px" version="1.1" viewBox="0 0 288.941 288.941" >
                <path id="Check" d="M285.377,46.368c-4.74-4.704-12.439-4.704-17.179,0L96.309,217.114L20.734,142.61   c-4.74-4.704-12.439-4.704-17.179,0s-4.74,12.319,0,17.011l84.2,82.997c4.692,4.644,12.499,4.644,17.191,0l180.43-179.239   C290.129,58.687,290.129,51.06,285.377,46.368C280.637,41.664,290.129,51.06,285.377,46.368z"/>
            </svg>
        </i>
        <span>{{ label }}</span>
    </label>
</template>

<style scoped module="cn">
    .checkbox {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .checkbox:hover i {
        border-color: var(--cl-blue-h);
    }

    .checkbox input {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
    }

    .checkbox input:checked ~ i {
        background-color: var(--cl-blue);
        border-color: var(--cl-blue);
    }

    .checkbox input:checked ~ i svg {
        opacity: 1;
    }

    .checkbox i {
        width: 20px;
        min-width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 1px solid #aaa;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: border .2s linear, background .2s linear;
    }

    .checkbox i svg {
        width: 10px;
        height: 10px;
        color: var(--cl-white);
        opacity: 0;
        transition: opacity .2s linear;
    }

    .checkbox span {
        font-size: 16px;
        margin-left: 10px;
    }
</style>