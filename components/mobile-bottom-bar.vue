<template>
  <div class="mobile-bottom-bar">
    <!-- Hamburger -->
    <button class="bar-btn" @click="toggleMenu" :aria-label="lang === 'it' ? 'Menu' : 'Menu'">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <span class="bar-label">Menu</span>
    </button>

    <!-- Telefono -->
    <a href="tel:+393494960228" class="bar-btn" :aria-label="lang === 'it' ? 'Chiama' : 'Call'">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span class="bar-label">{{ lang === 'it' ? 'Chiama' : 'Call' }}</span>
    </a>

    <!-- WhatsApp -->
    <a href="https://wa.me/393494960228" target="_blank" class="bar-btn" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      <span class="bar-label">WhatsApp</span>
    </a>

    <!-- Email -->
    <a href="mailto:info@cuoredibosco.it" class="bar-btn" aria-label="Email">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
      <span class="bar-label">Email</span>
    </a>

    <!-- CTA Prenota / Book -->
    <NuxtLink :to="bookingPath" class="bar-btn bar-cta"
      :aria-label="lang === 'it' ? 'Prenota' : 'Book'">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      <span class="bar-label">{{ lang === 'it' ? 'Prenota' : 'Book' }}</span>
    </NuxtLink>
  </div>

  <!-- Overlay menu -->
  <Teleport to="body">
    <div v-if="isMenuOpen" class="bottom-bar-overlay" @click.self="closeMenu">
      <div class="overlay-content">
        <button class="overlay-close" @click="closeMenu" aria-label="Chiudi">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav class="overlay-nav">
          <NuxtLink v-for="link in pageLinks" :key="link.id" :to="link.path" class="overlay-link"
            @click="closeMenu">
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="overlay-social">
          <a href="https://www.facebook.com/profile.php?id=61583661897314" target="_blank" rel="noopener"
            aria-label="Facebook">
            <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2026/01/facebook-2.png" alt="Facebook"
              width="40" />
          </a>
          <a href="https://www.instagram.com/bbcuoredibosco/" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2026/01/instagram-1.png" alt="Instagram"
              width="40" />
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { routes, type LanguageCode } from '~/utils/routes'

const props = defineProps<{
  lang: LanguageCode
}>()

const isMenuOpen = ref(false)

const pageLinks = computed(() => {
  return routes(props.lang).filter(r => !r.hidden)
})

const bookingPath = computed(() => {
  return props.lang === 'en' ? '/en/booking' : '/it/prenota'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.mobile-bottom-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 150;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.12);
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 4px 0;
}

@media (max-width: 1024px) {
  .mobile-bottom-bar {
    display: flex;
  }
}

.bar-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: none;
  border: none;
  color: #555;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 8px;
  font-family: var(--font-base);
  -webkit-tap-highlight-color: transparent;
}

.bar-btn:active {
  opacity: 0.7;
}

.bar-label {
  font-size: 10px;
  line-height: 1.2;
  white-space: nowrap;
}

.bar-cta {
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 8px;
  padding: 6px 12px;
}

.bar-cta svg {
  stroke: #fff;
}

.bar-cta .bar-label {
  color: #fff;
  font-weight: 600;
}

/* Overlay */
.bottom-bar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 149;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.overlay-content {
  background: #fff;
  width: 100%;
  max-height: 80%;
  border-radius: 16px 16px 0 0;
  padding: 1.5em 1.5em 2em;
  overflow-y: auto;
  animation: slideUp 0.25s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.overlay-close {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0 0 0.5em;
}

.overlay-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.overlay-link {
  display: block;
  padding: 0.9em 0.5em;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  font-family: var(--font-base);
}

.overlay-link:active {
  background-color: #f5f5f5;
}

.overlay-social {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin-top: 1.5em;
}

.overlay-social a {
  display: inline-block;
}
</style>
