<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="casa"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/INGRESSO_CAMERE.jpeg"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">PRENOTA</h1>
        <h3>ATTENZIONE SITO IN CONSTRUZIONE NON ANCORA ATTIVO</h3>
      </div>
    </div>

    <section class="text-center">
      <p class="has-text-align-center has-large-font-size">B&amp;B Cuore di Bosco è la nostra e la vostra casa in
        montagna, un rifugio di pace e quiete dove riposare mente e cuore.</p>
    </section>

    <div class="text-center">
      <figure><img decoding="async" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-03c.png"
          alt="" style="width:220px;height:36px"></figure>
    </div>

    <section class="text-center">
      <p>Benvenuti al&nbsp;<strong>B&amp;B&nbsp;<em>Cuore di
            Bosco</em></strong>,<br>un rifugio immerso nella natura
        della&nbsp;<strong>Vallagarina</strong>,<br>sull’A<strong>ltopiano di Brentonico</strong>,&nbsp;<strong>il
          giardino d’Europa</strong>.<br>Circondati da rigogliose montagne, il tempo rallenta<br>e la tranquillità regna
        sovrana.</p>

      <p>La nostra casa in pietra, con arredi in legno e dettagli
        curati, offre un’accoglienza calorosa e autentica. Qui, ogni angolo racconta una storia di semplicità e amore
        per la montagna.</p>
    </section>

    <!-- <section>
      <iframe src="https://www.bed-and-breakfast.it/booking-engine/widget.cfm?id_struttura=TUO_ID_STRUTTURA"
        width="100%" height="600" frameborder="0" scrolling="auto" style="border: none;">
      </iframe>
    </section> -->

    <section>
      <div class="photos">
        <figure>
          <img decoding="async" width="960" height="639"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/ESTERNO2.jpeg" alt=""
            class="wp-image-624" sizes="(max-width: 960px) 100vw, 960px">
        </figure>

        <figure>
          <img decoding="async" width="960" height="410"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/TERRAZZA.jpeg" alt=""
            class="wp-image-588" sizes="(max-width: 960px) 100vw, 960px">
        </figure>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

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

.photos {
  display: flex;
  gap: 1em;
}

.photos img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}

@media (max-width: 1024px) {
  p {
    font-size: 14pt;
  }

  h1,
  .page-title,
  .landing-title {
    font-size: 24pt;
  }

  h2 {
    font-size: 18pt;
  }

  h3 {
    font-size: 16pt;
  }
}

@media (max-width: 800px) {
  .landing-title {
    font-size: 24px;
  }

  .separator {
    min-width: 400px;
  }

  .photos {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
}

@media (max-width: 500px) {
  .separator {
    min-width: 200px;
  }
}
</style>