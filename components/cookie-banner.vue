<template>
    <div v-if="!consentGiven" class="cookie-banner">
        <div class="cookie-text">
            Utilizziamo cookie per analisi statistiche (Google Analytics). Acconsenti all'utilizzo?
            <div @click="goToPrivacyPolicy" class="link">
                Leggi la nostra Privacy Policy
            </div>
        </div>
        <div class="cookie-buttons">
            <button @click="acceptCookies" class="accept-button">Accetta</button>
            <button @click="declineCookies" class="decline-button">Rifiuta</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const consentGiven = ref(true);

const router = useRouter();

const goToPrivacyPolicy = () => {
    router.push("/privacy-policy");
};

onMounted(() => {
    const cookie = useCookie('cookie_consent')
    consentGiven.value = cookie.value === 'accepted' || cookie.value === 'declined'
});

const acceptCookies = () => {
    const cookie = useCookie('cookie_consent');
    cookie.value = 'accepted';
    consentGiven.value = true;
    location.reload();
};

const declineCookies = () => {
    const cookie = useCookie('cookie_consent');
    cookie.value = 'declined';
    consentGiven.value = true;
};
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fefefe;
    border-top: 1px solid #ccc;
    padding: 16px;
    z-index: 9999;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.cookie-text {
    margin-bottom: 12px;
    font-size: 14px;
    color: #333;
}

.cookie-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.accept-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
}

.accept-button:hover {
    background-color: #43a047;
}

.decline-button {
    background-color: #e0e0e0;
    color: #333;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
}

.decline-button:hover {
    background-color: #d5d5d5;
}
</style>
