<template>
    <div class="container">
        <div>
            <div class="welcome">
                <img decoding="async" width="1400" height="800" class="landing-image" alt=""
                    src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico.jpg"
                    data-object-fit="cover"
                    srcset="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico.jpg 1200w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-320x213.jpg 320w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-960x640.jpg 960w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-768x512.jpg 768w"
                    sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
                    class="wp-block-cover__background has-background-dim-30 has-background-dim"
                    style="background-color:#526a71"></span>
                <div class="landing-text">
                    <h1 class="landing-title">
                        Ritrova il tuo tempo,<br />
                        riscopri la pace.</h1>
                    <Button label="PRENOTA SUBITO" :onClick="() => console.log('ciao')">
                    </Button>
                </div>
            </div>

            <section class="overview">
                <p>B&B Cuore di Bosco è la nostra e la vostra casa in montagna, un rifugio di pace e quiete dove
                    riposare mente e cuore.</p>

                <figure class="separator-wrapper">
                    <img decoding="async" class="separator"
                        src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-03c.png"
                        alt="separator">
                </figure>

                <p>
                    Benvenuti al <strong>B&B Cuore di Bosco</strong>,<br />
                    un rifugio immerso nella natura della <strong>Vallagarina</strong>,<br />
                    sull’<strong>Altopiano di Brentonico, il giardino d’Europa</strong>.<br />
                    Circondati da rigogliose montagne, il tempo rallenta<br />
                    e la tranquillità regna sovrana.
                </p>
                <p>
                    La nostra casa in pietra, con arredi in legno e dettagli curati, offre un’accoglienza calorosa e
                    autentica. Qui, ogni angolo racconta una storia di semplicità e amore per la montagna.
                </p>
                <div>
                    <Button label="PRENOTA ORA IL TUO SOGGIORNO!" :onClick="() => console.log('ciao')" />
                </div>
            </section>

            <section class="breakfast">
                <div class="content-wrapper">
                    <figure class="image-container">
                        <img decoding="async" width="960" height="641"
                            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/pexels-arina-krasnikova-5709723-960x641.jpg"
                            alt="Colazione" />
                    </figure>

                    <div class="text-content">
                        <h2>A colazione da noi</h2>

                        <img class="separator"
                            src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
                            alt="separator" />

                        <p>
                            La colazione a casa nostra è un momento speciale, da gustare con calma e in buona compagnia.
                            Ogni mattina prepariamo con cura un vassoio ricco di bontà: dolci casalinghi, pane fresco,
                            salumi e formaggi del territorio, frutta di stagione e qualcosa di goloso per iniziare la
                            giornata col sorriso.
                        </p>

                        <p>
                            Preferisci il dolce o il salato? Basta farcelo sapere il giorno prima: pensiamo noi a tutto.
                        </p>

                        <p>
                            E se vuoi regalarti un risveglio ancora più lento, possiamo portartela in camera, per
                            gustarla con calma,
                            tra il profumo del legno e la luce del bosco che filtra dalle finestre.
                        </p>

                        <p>
                            Teniamo moltissimo alla qualità dei nostri ingredienti, e per questo ci riforniamo
                            principalmente da produttori locali.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Cuore di Bosco B&B',
    meta: [
        {
            name: 'description',
            content: 'Cuore di Bosco è un B&B immerso nella natura delle montagne di Brentonico. Un rifugio accogliente dove riscoprire la tranquillità tra boschi, colazioni genuine e ospitalità autentica.',
        },
        {
            name: 'keywords',
            content: 'b&b, bed and breakfast, Brentonico, montagna, natura, vacanze Trentino, relax, colazione genuina, ospitalità, soggiorno romantico, Cuore di Bosco',
        },
        {
            property: 'og:title',
            content: 'Cuore di Bosco - B&B tra i boschi di Brentonico',
        },
        {
            property: 'og:description',
            content: 'Un’accoglienza calda e familiare tra i boschi del Trentino. Colazioni fatte in casa, silenzio e natura a pochi passi da Brentonico.',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: 'Cuore di Bosco - Il tuo rifugio tra le montagne di Brentonico',
        },
        {
            name: 'twitter:description',
            content: 'Rilassati nel nostro B&B tra i boschi del Trentino. Esperienza autentica, natura, e colazioni fatte in casa.',
        },
    ],
    link: [
        { rel: 'canonical', href: 'https://cuoredibosco.altervista.org' }
    ]
});
</script>

<style scoped>
section {
    margin: 1em auto;
    max-width: 1200px;
}

.landing-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center 26%;
    display: block;
}

.landing-text {
    position: relative;
}

.landing-title {
    color: white;
    line-height: 1.25;
    font-size: 64px;
}

.welcome {
    position: relative;
    overflow: hidden;
}

.landing-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

.overview {
    padding: 2em;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 18pt;
    max-width: 700px;
}

.breakfast {
    padding: 2rem;
}

.content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
}

.image-container {
    flex: 1 1 45%;
    margin: 0;
}

.image-container img {
    width: 100%;
    max-height: 500px;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: cover;
}

.text-content {
    flex: 1 1 45%;
    font-family: Georgia, serif;
    color: #333;
}

.text-content h2 {
    font-size: 2rem;
}

.separator-wrapper {
    display: flex;
    justify-content: center;
}

.separator {
    display: block;
    margin: 1rem 0;
    max-width: 100%;
    min-width: 200px;
}

.text-content p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1rem;
}

@media (max-width: 1024px) {
    .landing-title {
        font-size: 24px;
    }
}
</style>