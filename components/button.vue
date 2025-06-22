<template>
    <button class="button" @click="onClick">
        {{ label }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: true
    }
})
</script>

<style scoped>
.button {
    background-color: var(--color-primary);
    color: white;
    padding: 0.50rem 1.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: var(--color-secondary);
}
</style>
