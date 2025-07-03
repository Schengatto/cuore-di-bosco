<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="casa"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/Monte-Baldo-foto-di-Luciano-Gaudenzio-15-1.jpg"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">DIMORE DEL BOSCO</h1>
      </div>
    </div>

    <section class="intro">
      <h2 class="intro-title">Scopri le nostre tre camere</h2>
      <blockquote class="intro-text">
        <p>Tre stanze, tre atmosfere. Ogni dimora ha il suo profumo, il suo ritmo, il suo calore.
          Qui, tra legno, silenzio e natura, si riposa il corpo e la mente.</p>
      </blockquote>
    </section>

    <section class="rooms">
      <div class="card">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/blackberry.png" alt="mora">
        </figure>
        <div class="room-info">
          <h2>MORA</h2>
          <p class="room-short">Intima e avvolgente, ideale per coppie in cerca di relax.</p>
          <p>Ampia camera da 25 mq con letto matrimoniale, armadio, cassettiera, zona relax con divano, frigobar,
            macchina del caffè e bollitore. Bagno con doccia, lavabo e bidet. Prodotti per igiene personale, pulizia e
            biancheria inclusi.
            Per un relax di coppia o qualche giorno di detox tra amiche!</p>
          <h3>€ 85 a notte a dimora</h3>
        </div>
      </div>

      <div class="card">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/blueberry.png" alt="mirtillo">
        </figure>
        <div class="room-info">
          <h2>MIRTILLO</h2>
          <p class="room-short">Spaziosa e accogliente, adatta a famiglie che desiderano comfort e tranquillità.</p>
          <p>Camera doppia con camera matrimoniale da 23 mq e seconda camera con letto a castello. A richiesta kit bimbo
            con lettino con materasso, lenzuola e coperte, fasciatoio e scalda biberon. Prodotti per igiene personale,
            pulizia e biancheria inclusi. Per famiglie con bambini tutto lo spazio e le comodità necessarie!</p>
          <h3>€ 100 a notte a dimora</h3>
        </div>
      </div>

      <div class="card">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/raspberry.png" alt="lampone">
        </figure>
        <div class="room-info">
          <h2>LAMPONE</h2>
          <p class="room-short">Fresca e luminosa, perfetta per chi ama la natura.</p>
          <p>Ampia camera matrimoniale o tripla da 30 mq con letto matrimoniale ed eventuale terzo letto, armadio,
            cassettiera, zona relax con divano, frigobar, macchina del caffè e bollitore. Bagno con doccia, lavabo e
            bidet. Prodotti per igiene personale, pulizia e biancheria inclusi. Per famiglia o tra amici, con vista
            panoramica e pace!</p>
          <h3>€ 90 a notte a dimora </h3>
        </div>
      </div>
    </section>
  </div>

</template>

<script lang="ts" setup>
import camere from '~/assets/images/camere.webp';

const contactUs = () => {

};

useHead({
  title: 'Camere | Cuore di Bosco - Prada di Brentonico',
  meta: [
    {
      name: 'description',
      content: 'Scopri le camere del B&B Cuore di Bosco: accoglienti, confortevoli e arredate con gusto, ideali per il tuo soggiorno in Trentino.'
    },
    {
      name: 'keywords',
      content: 'camere B&B Cuore di Bosco, alloggi Trentino, stanza in montagna, dormire a Brentonico'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.cuoredibosco.it/rooms' }
  ]
});

</script>

<style scoped>
figure {
  margin: 0;
}

.card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.room-info h2 {
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #526a71;
}

.room-info h3 {
  font-size: 1.2rem;
  color: #333;
  margin-top: 1rem;
}

.room-short {
  font-weight: 500;
  font-style: italic;
  color: #526a71;
  margin: 0.5rem 0 1rem;
}

@media (max-width: 600px) {
  .rooms {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  .landing-text {
    bottom: 1rem;
    left: 1rem;
  }

  .page-title {
    font-size: 2rem;
  }
}

section {
  margin: 0.25em auto;
  max-width: 1200px;
  padding: 1rem;
}

.page-title {
  font-size: 42pt;
}

.landing-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 26%;
  display: block;
}

.room-list {
  display: flex;
  flex-direction: column;
  font-size: 14pt;
  gap: 1em;
}

.room-list div {
  text-align: left;
}

.landing-title {
  line-height: 1.25;
  font-size: 28pt;
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

.rooms {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1em;
}

.card {
  background-color: var(--color-background);
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
}

.room-info {
  text-align: center;
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