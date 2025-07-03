<template>
  <div class="carousel">
    <div class="carousel-image">
      <img :src="images[currentIndex]" alt="Carousel image" />
    </div>
    <div class="controls">
      <button @click="prev">‹</button>
      <button @click="next">›</button>
    </div>
    <div class="dots">
      <span v-for="(image, index) in images" :key="index" @click="goTo(index)"
        :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const goTo = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
}

.carousel-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.controls button {
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.dots {
  text-align: center;
  margin-top: 10px;
}

.dots span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  display: inline-block;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.dots .active {
  background-color: #333;
}
</style>
