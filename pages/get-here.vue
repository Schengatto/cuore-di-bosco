<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="landscape"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/vallagarina-paesaggio-autunnale-sull-altipiano-di-brentonico_26491.jpg"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">RAGGIUNGICI</h1>
      </div>
    </div>

    <section class="text-center">
      <p><em>Cuore di Bosco</em> si trova a Prada di Brentonico,
        facilmente raggiungibile in auto dall’uscita di Rovereto dell’autostrada A22. </p>
      <p>Vi consigliamo di passare da Mori e salire seguendo le
        indicazioni per Brentonico. Da Brentonico la SP3 vi porterà in pochi minuti a Prada. Parcheggiate nel parcheggio
        libero accanto alla chiesa e al parco giochi, siamo a pochi passi! </p>
      <p>Se hai bisogno di aiuto chiamaci e arriviamo!</p>
      <p>Una volta arrivati, vi accoglierà il silenzio e la bellezza
        dell’Altopiano di Brentonico, con la sua cornice di verdi montagne.</p>

    </section>

    <div class="text-center">
      <figure class="separator"><img decoding="async"
          src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-03c.png" alt=""
          style="width:220px;height:36px"></figure>
    </div>

    <section class="text-center">
      <h2 class="wp-block-heading has-text-align-center">Trovaci con Maps!</h2>
      <p style="font-family: 'Cardo', serif; font-size: 24px; text-align: center;">Scrivi su maps:<br> B&amp;B Cuore di
        Bosco <br>
        Via Gardesani, 15 – Prada (TN)<br>
        o clicca sulla mappa per aprirla in Google Maps<br> e ottenere il percorso.</p>
      <a href="https://www.google.com/maps/place/Via+Gardesani,+15,+38060+Prada+TN" target="_blank"
        rel="noopener noreferrer nofollow" style="display: block; margin-bottom: 10px; font-family: 'Cardo', serif;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4628.566893163929!2d10.95615487755049!3d45.80152017108149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782051cad11ec19%3A0x135a8894e1f97c2d!2sVia%20Gardesani%2C%2015%2C%2038060%20Prada%20TN!5e1!3m2!1sit!2sit!4v1749392711552!5m2!1sit!2sit"
          width="100%" height="500" style="border:0; border-radius: 10px;" allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </a>
    </section>

    <div class="text-center">
      <figure class="separator"><img decoding="async"
          src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-03c.png" alt=""
          style="width:220px;height:36px"></figure>
    </div>

    <section class="text-center">
      <h2 class="wp-block-heading has-text-align-center">Hai bisogno di parlare con noi?</h2>
      <p class="has-text-align-center">Scrivici via mail, whatsapp o chiamaci!</p>
      <div class="row-buttons">
        <Button label="Chiama +39 3494960228" />
        <Button label="Scrivi una mail a info@cuoredibosco.it" />
      </div>
    </section>

    <div class="text-center">
      <figure><img decoding="async" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
          alt="" style="width:220px;height:16px"></figure>
    </div>

    <section class="text-center">
      <h2>Se ti sembra la location adatta per il tuo evento</h2>
      <Button label="Chiedi un preventivo" />
    </section>

    <div class="text-center">
      <figure><img decoding="async" src="https://im.altervista.org/wordpress/media/demo-content/agritourism/sep-07c.png"
          alt="" style="width:220px;height:16px"></figure>
    </div>

    <section class="text-center">
      <h2 class="wp-block-heading has-text-align-center">Vuoi sapere cosa succede quassù?</h2>
      <p class="has-text-align-center">Puoi seguirci su Facebook o Instagram: mostriamo le bellezze del territorio,
        pubblichiamo ricette e festeggiamo con i nostri clienti!</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Come arrivare | Cuore di Bosco - Prada di Brentonico',
  meta: [
    {
      name: 'description',
      content: 'Scopri come raggiungere il B&B Cuore di Bosco a Prada di Brentonico. Indicazioni stradali, parcheggio e trasporti per un arrivo semplice.'
    },
    {
      name: 'keywords',
      content: 'come arrivare Cuore di Bosco, indicazioni B&B Trentino, strada per Prada di Brentonico, mappa, parcheggio'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.cuoredibosco.it/get-here' }
  ]
});
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

.row-buttons {
  justify-content: center;
  display: flex;
  gap: 1em;
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
}

@media (max-width: 500px) {
  .separator {
    min-width: 200px;
  }
}
</style>