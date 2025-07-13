<template>
    <div class="desktop-header">
        <img height="100" :src="logo" class="custom-logo link" alt="B&amp;B CUORE DI BOSCO PRADA BRENTONICO"
            decoding="async" fetchpriority="high" :onClick="goToHome" loading="eager">
        <div class="site-name">
            <div class="title">B&B CUORE DI BOSCO</div>
            <div>
                <LanguageSwitcher />
            </div>
            <div class="site-menu">
                <div v-for="page in pageLinks" :key="page.label" class="page-link">
                    <RouterLink :to="page.path" @click="closeMenuAndScroll" activeClass="link-active">{{ page.label }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isMobile" class="mobile-header">
        <div class="menu-toggle" @click="toggleMenu" :class="{ 'open': isMenuVisible }">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="site-name-mobile">
            <div class="title">B&B CUORE DI BOSCO PRADA BRENTONICO</div>
        </div>
        <img height="50" :src=logo class="custom-logo" alt="B&amp;B CUORE DI BOSCO PRADA BRENTONICO" decoding="async"
            fetchpriority="high" sizes="(max-width: 1000px) 100vw, 1000px" loading="eager">
    </div>
    <div v-if="isMobile && isMenuVisible" class="mobile-menu">
        <div v-for="page in pageLinks" :key="page.label">
            <RouterLink :to="page.path" @click="closeMenuAndScroll">
                <div class="page-link">{{ page.label }}</div>
            </RouterLink>
        </div>
        <div class="mobile-language-switcher">
            <LanguageSwitcher />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '~/assets/images/small-logo.webp';
import type { LanguageCode } from '~/utils/routes';

interface NavLink {
    text: string;
    url: string;
    hidden: boolean;
}

const route = useRoute();
const router = useRouter();
const isMobile = ref(false);
const isMenuVisible = ref(false);
const openSubMenus = ref<Set<string>>(new Set());
const lastScrollPosition = ref(0);

const currentLocale = computed<LanguageCode>(() => route?.path?.split('/')[1] as LanguageCode);


const pageLinks = computed(() => {
    return routes(currentLocale.value || "it").filter(r => !r.hidden);
});

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

const desktopLeaveMenu = () => {
    if (!isMobile.value) {
        closeMenu();
    }
}

const closeMenu = () => {
    isMenuVisible.value = false;
    if (!isMobile.value) {
        openSubMenus.value.clear();
    }
};

const handleScroll = () => {
    if (isMobile.value) return;

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    lastScrollPosition.value = currentScrollPosition;
};

const closeMenuAndScroll = () => {
    closeMenu();
    router.afterEach(() => {
    });
};

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 1024;
    if (!isMobile.value) {
        desktopLeaveMenu();
    }
};

const goToHome = () => {
    router.push("/");
}

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
#page {
    margin-top: 80px;
}

.desktop-header {
    display: flex;
    align-items: center;
    height: 80px;
    gap: 1em;
}

.mobile-header {
    display: none;
}

.site-name {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1em;
}

.site-name-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title {
    font-size: 1.5rem;
}

.subtitle {
    font-size: 14px;
    line-height: 1.5;
    color: gray;
}

.site-menu {
    margin-top: 1em;
    display: flex;
    font-size: 14px;
    gap: 1.2em;
    justify-content: center;
    align-items: center;
}

.page-link {
    cursor: pointer;
    font-weight: bold;
    border-bottom: 1px solid transparent !important;
}

.page-link:hover {
    color: var(--color-primary);
    border-bottom: 1px solid var(--color-primary) !important;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: 0.5rem;
    width: 30px;
    height: 25px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
}

.menu-toggle span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.menu-toggle span:nth-child(1) {
    top: 0px;
}

.menu-toggle span:nth-child(2) {
    top: 10px;
}

.menu-toggle span:nth-child(3) {
    top: 20px;
}

.menu-toggle.open span:nth-child(1) {
    top: 10px;
    transform: rotate(135deg);
}

.menu-toggle.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

.menu-toggle.open span:nth-child(3) {
    top: 10px;
    transform: rotate(-135deg);
}

.mobile-menu {
    z-index: 10;
}

.link-active {
    color: var(--color-success);
}

@media (max-width: 1024px) {
    #page {
        margin: 50px 0 0 0;
    }

    main {
        margin-bottom: 10px;
    }

    .desktop-header {
        display: none;
    }

    .mobile-header {
        display: flex;
        height: 50px;
        justify-content: space-around;
    }

    .title {
        font-size: 1rem;
    }

    .site-name {
        justify-content: center;
    }

    .menu-toggle {
        display: flex;
        margin-top: 10px;
        background-color: transparent;
        padding: 0.25rem;
        color: var(--gray-900);
    }

    .mobile-menu {
        position: absolute;
        width: 100%;
        height: calc(100vh - 50px);
        left: 0;
        top: 50px;
        background-color: white;
    }

    .page-link {
        margin: 1.5em 0.5em;
        text-decoration: none;
        border-bottom: none;
    }

    .page-link a {
        text-decoration: none;
        color: black;
        border-bottom: none;
    }

    .page-link a:hover {
        text-decoration: none;
        color: var(--color-primary);
        /* border-bottom: 1px lightgray solid; */
    }

    .mobile-language-switcher {
        padding: 0 0.5rem;
    }
}

@media (max-width: 800px) {
    .custom-logo {
        display: none;
    }

    .mobile-header {
        display: flex;
        height: 50px;
        justify-content: start;
        gap: 1em;
    }

    .title {
        font-size: 10pt;
    }
}
</style>