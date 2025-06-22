<template>
    <header>
        <div class="desktop-header">
            <img height="120"
                src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo.png"
                class="custom-logo" alt="B&amp;B CUORE DI BOSCO PRADA BRENTONICO" decoding="async" fetchpriority="high"
                srcset="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo.png 1000w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-320x316.png 320w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-960x947.png 960w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-768x757.png 768w"
                sizes="(max-width: 1000px) 100vw, 1000px" loading="eager">
            <div class="site-name">
                <div class="title">B&B CUORE DI BOSCO PRADA BRENTONICO</div>
                <div class="subtitle">B&B CUORE DI BOSCO CIN 000000000000000000000</div>
                <div class="site-menu">
                    <div class="page-link">
                        BENVENUTI
                    </div>
                    <div class="page-link">
                        LA NOSTRA CASA
                    </div>
                    <div class="page-link">
                        DIMORE DEL BOSCO
                    </div>
                    <div class="page-link">
                        RAGGIUNGICI
                    </div>
                    <div class="page-link">
                        PRENOTA E CONTATTI
                    </div>
                    <div class="page-link">
                        ESPLORA
                    </div>
                    <div class="page-link">
                        I NOSTRI SERVIZI
                    </div>
                    <div class="page-link">
                        REGOLAMENTO
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-header">
            <div class="menu-toggle" @click="toggleMenu" :class="{ 'open': showMenu }">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="site-name">
                <div class="title">B&B CUORE DI BOSCO PRADA BRENTONICO</div>
            </div>
            <img height="50"
                src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo.png"
                class="custom-logo" alt="B&amp;B CUORE DI BOSCO PRADA BRENTONICO" decoding="async" fetchpriority="high"
                srcset="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo.png 1000w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-320x316.png 320w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-960x947.png 960w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-768x757.png 768w"
                sizes="(max-width: 1000px) 100vw, 1000px" loading="eager">
        </div>
    </header>

    <div id="page">
        <main>
            <slot />
        </main>

        <footer>
            <div class="footer-content">
                <h2 class="footer-title">Ti aspettiamo!</h2>
                <p class="footer-actions">
                    Prenotare è molto semplice: puoi scriverci una mail a <a
                        href="mailto:info@cuoredibosco.it">info@cuoredibosco.it</a> o un messaggio
                    whatsapp o telegram al <a href="tel:+39340000000">340 0000000</a>, ti risponderemo al più presto!
                </p>
                <div class="footer-cards">
                    <div class="card">
                        <h3>Come raggiungerci</h3>
                        <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/icon-circle-1.png"
                            width="64" />
                        <p>Imposta su Google Maps questo indirizzo: ti porterà subito da noi!</p>
                        <p><strong>B&B Cuore di Bosco</strong><br />
                            Via Gardesani, 15<br />
                            Brentonico – fraz. Prada (TN)</p>
                    </div>
                    <div class="card">
                        <h3>Orari di apertura</h3>
                        <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/cropped-accomodation.png"
                            width="64" />
                        <p>Check in 15.00 – 18.00<br />
                            Check out 9 – 10.30</p>
                        <p><strong>B&B Cuore di Bosco</strong><br />
                            CIN 0000000000000000000<br />
                            P IVA 000000000000000000</p>
                    </div>
                    <div class="card">
                        <h3>Contatti</h3>
                        <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/icon-circle-3.png"
                            width="64" />
                        <p>Puoi scriverci al numero <a href="tel:+39340000000">340 0000000</a><br />
                            o una mail a <a href="mailto:info@cuoredibosco.it">info@cuoredibosco.it</a></p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </footer>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isMobile = ref(false);
const showMenu = ref(false);
const openSubMenus = ref<Set<string>>(new Set());
const lastScrollPosition = ref(0);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const toggleSubMenu = (group: string) => {
    if (isMobile.value) {
        if (openSubMenus.value.has(group)) {
            openSubMenus.value.delete(group);
        } else {
            openSubMenus.value.add(group);
        }
    }
};

const openSubMenu = (group: string) => {
    if (!isMobile.value) {
        openSubMenus.value.clear();
        openSubMenus.value.add(group);
    }
};

const isSubMenuOpen = (group: string) => {
    return isMobile.value || openSubMenus.value.has(group);
};

const desktopLeaveMenu = () => {
    if (!isMobile.value) {
        closeMenu();
    }
}

const closeMenu = () => {
    showMenu.value = false;
    if (!isMobile.value) {
        openSubMenus.value.clear();
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const handleScroll = () => {
    if (isMobile.value) return;

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    lastScrollPosition.value = currentScrollPosition;
};

const closeMenuAndScroll = () => {
    closeMenu();
    router.afterEach(() => {
        setTimeout(scrollToTop, 100);
    });
};

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
    if (isMobile.value) {
        // openSubMenus.value = new Set(menuGroups.value);
    } else {
        openSubMenus.value.clear();
    }
};

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
    margin-top: 120px;
}

main {

    /* width: 100%; */
    /* max-width: 1280px; */
    /* margin: 80px auto 10px auto; */
}

header {
    top: 0;
    gap: 1.5em;
    position: fixed;
    z-index: 1;
    background-color: #f6eedc;
    width: 100%;
}

.desktop-header {
    display: flex;
    align-items: center;
    height: 120px;
}

.mobile-header {
    display: none;
}

.site-name {
    display: flex;
    flex-direction: column;
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
    gap: 2em;
    justify-content: center;
    align-items: center;
}

.page-link {
    text-decoration: underline;
    cursor: pointer;
}

.page-link:hover {
    color: var(--color-primary)
}

.footer-content {
    background-color: #f6eedc;
    padding: 2em;
    text-align: center;
}

.footer-cards {
    display: flex;
    justify-content: center;
    gap: 3em;
    flex-wrap: wrap;
    margin-top: 2em;
}

.card {
    width: 400px;
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


@media (max-width: 1024px) {
    #page {
        margin-top: 50px;
    }

    main {
        max-width: 96%;
        margin: auto;
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