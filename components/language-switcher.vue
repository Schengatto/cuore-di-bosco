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

const setLocale = (newLocale) => {
  const segments = route.path.split('/');
  const currentLocale = segments[1];

  if (currentLocale === newLocale) return;

  const currentRoutes = routes(currentLocale);
  const newRoutes = routes(newLocale);

  const currentPathWithoutLocale = '/' + segments.slice(2).join('/');

  const currentRoute = currentRoutes.find(r => r.path.endsWith(currentPathWithoutLocale));
  if (!currentRoute) {
    router.push(`/${newLocale}`);
    return;
  }

  const newRoute = newRoutes.find(r => r.id === currentRoute.id);
  if (!newRoute) {
    router.push(`/${newLocale}`);
    return;
  }

  router.push(newRoute.path);
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
