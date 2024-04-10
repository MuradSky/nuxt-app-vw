<script setup lang="ts">
    defineProps<{ viewType: string }>()
    const emit = defineEmits<{ (e: 'change', value: string): void }>()
    
    const updated = (state: string)=> {
        emit('change', state)
    }

</script>

<template>
    <div :class="cn.switch">
        <button @click="updated('row')" :class="{ [cn.active]: viewType === 'row' }">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path 
                    d="M3 10V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V10M3 10V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V10M3 10H21M3 14H21" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2"
                />
            </svg>
        </button>
        <button @click="updated('grid')" :class="{ [cn.active]: viewType === 'grid' }">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="4" y="13" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="13" y="4" width="7" height="7" rx="1" fill="currentColor"/>
                <rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor"/>
            </svg>
        </button>
    </div>
</template>

<style scoped module="cn">
    .switch {
        display: flex;
        margin: 0 -2px; 
    }

    .switch button {
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--cl-white);
        border-radius: 4px;
        border: 1px solid #aaa;
        color: #aaa;
      
        transition: all .2s linear;
        margin: 0 2px; 
    }

    .switch button.active {
        color: var(--cl-blue-h);
        border: 1px solid var(--cl-blue-h);
    }
</style>