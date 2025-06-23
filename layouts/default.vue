<template>
    <header>
        <TopNavbar />
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
                    <a href="https://maps.app.goo.gl/eWviFC8GAjJaqzSU6" target="_blank" class="card link">
                        <h3>Come raggiungerci</h3>
                        <img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/icon-circle-1.png"
                            width="64" />
                        <p>Imposta su Google Maps questo indirizzo: ti porterà subito da noi!</p>
                        <p><strong>B&B Cuore di Bosco</strong><br />
                            Via Gardesani, 15<br />
                            Brentonico – fraz. Prada (TN)</p>
                    </a>
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
</script>

<style scoped>
#page {
    margin-top: 120px;
}

header {
    top: 0;
    gap: 1.5em;
    position: fixed;
    z-index: 1;
    background-color: #f6eedc;
    width: 100%;
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
    text-decoration: none;
    color: black;
    width: 400px;
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
}
</style>