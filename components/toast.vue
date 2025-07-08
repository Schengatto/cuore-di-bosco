<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    message: string
    type: 'info' | 'warning' | 'alert'
    duration?: number
}>()

const visible = ref(true)

onMounted(() => {
    if (props.duration) {
        setTimeout(() => {
            visible.value = false
        }, props.duration)
    }
})
</script>

<template>
    <div v-if="visible" :class="['toast', type]" role="alert">
        <strong>{{ message }}</strong>
    </div>
</template>

<style scoped>
.toast {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100%;
    padding: 0.5rem 0.5rem;
    border-radius: 6px;
    color: #fff;
    font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
    animation: slideDown 0.3s ease-out;
    text-align: center;
}

.toast.info {
    background-color: #007bff;
}

.toast.warning {
    background-color: #ffcc00;
    color: #000;
}

.toast.alert {
    background-color: #ff4444;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translate(-50%, -10px);
    }

    to {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}

@media (max-width: 800px) {
    .toast {
        top: 50px;
    }
}
</style>
