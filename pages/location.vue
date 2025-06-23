<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="casa"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/CASA.jpg" data-object-fit="cover"
        sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true" style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">LA NOSTRA CASA</h1>
      </div>
    </div>

    <section class="intro">
      <p>B&B Cuore di Bosco è la nostra e la vostra casa in montagna, un rifugio di pace e quiete dove
        riposare mente e cuore.</p>
    </section>

    <section class="overview">
      <div class="content-wrapper">
        <figure class="image-container">
          <img decoding="async" width="960" height="641"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-960x640.jpg"
            alt="panorama" />
        </figure>

        <div class="text-content">
          <h2>Tutti i progetti nascono da un sogno</h2>

          <img class="separator" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
            alt="separator" />

          <p>
            La volontà di una vita più serena e meno di fretta per noi e per la nostra famiglia ci ha portato ad un
            cambio di vita completo, dalla brulicante ed asfaltata pianura padana all’Altopiano di Brentonico.
            E’ stato amore a prima vista. Il nostro posto. Noi ci siamo ripresi il nostro tempo tempo lento e la nostra
            pace, unitevi anche voi!
          </p>
        </div>
      </div>
    </section>

    <section class="breakfast">
      <div class="content-wrapper">
        <div class="text-content">
          <h2>Esperienze speciali</h2>

          <img class="separator" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
            alt="separator" />
          <p>
            Di b&b ce ne sono tanti, ma noi speriamo di offrirvi un mix di esperienze speciali: la bellezza delle
            montagne intorno, la passione per la cucina e l’ospitalità e tutto l’entusiasmo che mettiamo nel nostro
            lavoro! Ci siamo organizzati per pensare alle esigenze di coppie e famiglie con bambini, ma vogliamo fare
            del nostro meglio per accogliere tutti!
          </p>
          <p>
            Per esigenze alimentari particolari come vegetariano, vegano, no glutine, no lattosio e altre siamo a tua
            disposizione, ti chiediamo di avvisarci prima dell’arrivo per poterci organizzare al meglio!</p>

          <p>Ci vediamo presto!
          </p>
        </div>
        <figure class="image-container">
          <img decoding="async" width="960" height="641"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/cropped-logo_sfondo-960x947.png"
            alt="logo" />
        </figure>
      </div>
    </section>

    <div class="contact-us">
      <img decoding="async" width="1400" height="800" class="landing-image opacity50" alt=""
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico.jpg" data-object-fit="cover"
        srcset="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico.jpg 1200w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-320x213.jpg 320w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-960x640.jpg 960w, https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/brentonico-768x512.jpg 768w"
        sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        class="wp-block-cover__background has-background-dim-30 has-background-dim"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h2 class="landing-title text-black">Hai bisogno di informazioni?</h2>
        <img class="separator" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
          alt="separator" />
        <h3>Contattaci!</h3>
        <Button label="CONTATTACI" :onClick="contactUs" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contactUs = () => {

}
</script>

<style scoped>
section {
  margin: 1em auto;
  max-width: 1200px;
  padding: 2rem;
}

.page-title {
  font-size: 42pt;
}

.landing-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 50%;
  display: block;
}

.opacity50 {
  opacity: 0.5;
}

.landing-title {
  line-height: 1.25;
  font-size: 28pt;
}

.welcome {
  position: relative;
  overflow: hidden;
}

.contact-us {
  position: relative;
  overflow: hidden;
}

.landing-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.intro {
  padding: 2em;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16pt;
  max-width: 700px;
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
  font-size: 16pt;
  color: #333;
}

.text-content h2 {
  font-size: 18pt;
}

.separator-wrapper {
  display: flex;
  justify-content: center;
}

.separator {
  display: block;
  margin: 1rem 0;
  max-width: 100%;
  min-width: 500px;
}

.text-content p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

@media (max-width: 1024px) {
  .landing-title {
    font-size: 24px;
  }
}

@media (max-width: 800px) {
  .landing-title {
    font-size: 24px;
  }

  .separator {
    min-width: 400px;
  }
}

@media (max-width: 500px) {
  .separator {
    min-width: 200px;
  }
}
</style>