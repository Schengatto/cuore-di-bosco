<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="casa"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/SALA_COLAZIONI-5-960x720.jpeg"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px" />
      <div class="landing-text">
        <h1 class="page-title">I NOSTRI SERVIZI</h1>
        <button @click="goToBooking">PRENOTA SUBITO</button>
      </div>
    </div>

    <section>
      <div class="wp-block-group">
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/wifi.png"
            alt="FREE WIFI" />
          <figcaption>FREE WIFI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/towels-1.png"
            alt="ASCIUGAMANI E BIANCHERIA INCLUSI" />
          <figcaption>ASCIUGAMANI E BIANCHERIA INCLUSI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/products.png"
            alt="DOTAZIONI DI CORTESIA PER GLI OSPITI" />
          <figcaption>DOTAZIONI DI CORTESIA PER GLI OSPITI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/shower.png"
            alt="DOCCIA E BAGNO PRIVATI" />
          <figcaption>DOCCIA E BAGNO PRIVATI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/breakfast.png"
            alt="COLAZIONE DOLCE E SALATA" />
          <figcaption>COLAZIONE DOLCE E SALATA</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/kettle.png"
            alt="SET BOLLITORE" />
          <figcaption>SET BOLLITORE</figcaption>
        </figure>
        <figure class="icon"><img
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/laundry-machine.png"
            alt="SERVIZIO LAVANDERIA" />
          <figcaption>SERVIZIO LAVANDERIA</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/bicycle.png"
            alt="BICICLETTE A DISPOSIZIONE" />
          <figcaption>BICICLETTE A DISPOSIZIONE</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/toys.png"
            alt="GIOCHI PER BAMBINI" />
          <figcaption>GIOCHI PER BAMBINI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/pencils.png"
            alt="DOTAZIONI PER BAMBINI" />
          <figcaption>DOTAZIONI PER BAMBINI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/crib.png"
            alt="CULLA PER BAMBINI" />
          <figcaption>CULLA PER BAMBINI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/coloring.png"
            alt="MATERIALI PER BAMBINI" />
          <figcaption>MATERIALI PER BAMBINI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/baby-carrier.png"
            alt="SUPPORTI PER PORTARE" />
          <figcaption>SUPPORTI PER PORTARE</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/bookshelf.png"
            alt="LIBRERIA PER ADULTI E BAMBINI" />
          <figcaption>LIBRERIA PER ADULTI E BAMBINI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/picnic-basket.png"
            alt="SERVIZIO PIC-NIC" />
          <figcaption>SERVIZIO PIC-NIC</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToBooking = () => {
  router.push("/booking");
};
</script>

<style scoped>
section {
  margin: 2em auto;
  padding: 0 1em;
  max-width: 1200px;
}

.landing-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 46%;
  display: block;
  opacity: 0.7;
  border-radius: 8px;
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
  padding: 1em;
}

.page-title {
  color: #1c1b1b;
  line-height: 1.2;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

.wp-block-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0rem;
  justify-content: center;
  margin-top: 2em;
}

.icon {
  flex: 0 1 120px;
  text-align: center;
  padding: 1em;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: transform 0.2s ease-in-out, background-color 0.3s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.icon:hover {
  transform: scale(1.05);
  background-color: #eef3f5;
}

.icon img {
  max-width: 64px;
  height: auto;
  margin-bottom: 0.5em;
}

figcaption {
  font-size: 0.95rem;
  color: #333;
}

button {
  background-color: #526a71;
  color: white;
  font-size: 1rem;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

figure {
  margin: 1.5em;
}

button:hover {
  background-color: #3e5157;
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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .icon {
    flex: 0 1 45%;
  }
}

@media (max-width: 500px) {
  .page-title {
    font-size: 1.75rem;
  }

  .icon {
    flex: 0 1 100%;
  }
}
</style>
