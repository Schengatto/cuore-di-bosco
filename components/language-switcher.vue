<template>
  <div class="language-switcher">
    <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)"
      :disabled="locale.code === currentLocale" class="flag-button" :aria-label="locale.name" :title="locale.name">
      <span :class="`fi fi-${getFlagCode(locale.code)}`" />
    </button>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const currentLocale = computed(() => route?.path?.split('/')[1]);

const locales = [
  { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
  { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
];

function getFlagCode(code) {
  const map = {
    it: 'it',
    en: 'gb',
  }
  return map[code] || 'un'
}

function setLocale(newLocale) {
  const segments = route.path.split('/');
  if (segments[1] === newLocale) return;

  segments[1] = newLocale;
  const newPath = segments.join('/') || '/';
  console.log(newPath)
  router.push(newPath);
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.flag-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0.2rem;
  transition: transform 0.2s ease;
  opacity: 0.5;
}

.flag-button:disabled {
  opacity: 1;
  cursor: default;
}

.flag-button:hover:not(:disabled) {
  transform: scale(1.15);
}
</style>
