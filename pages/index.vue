<template>
  <div class="container">
    <div>
      <div class="welcome">
        <img decoding="async" width="1400" height="800" class="landing-image" alt="panorama" :src="brentonico"
          data-object-fit="cover" loading="lazy" /><span aria-hidden="true"
          class="wp-block-cover__background has-background-dim-30 has-background-dim"
          style="background-color: #526a71"></span>
        <div class="landing-text">
          <h1 class="landing-title">
            Ritrova il tuo tempo,<br />
            riscopri la pace.
          </h1>
          <Button label="PRENOTA SUBITO" :onClick="goToBooking" />
        </div>
      </div>

      <section class="overview">
        <p class="quote">
          B&B Cuore di Bosco è la nostra e la vostra casa in montagna,<br />un
          rifugio di pace e quiete dove riposare mente e cuore.
        </p>

        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>

        <p>
          Benvenuti al <strong>B&B Cuore di Bosco</strong>,<br />
          un rifugio immerso nella natura della
          <strong>Vallagarina</strong>,<br />
          sull’<strong>Altopiano di Brentonico, il giardino d’Europa</strong>.<br />
          Circondati da rigogliose montagne, il tempo rallenta<br />
          e la tranquillità regna sovrana.
        </p>
        <p>
          La nostra casa in pietra, con arredi in legno e dettagli curati, offre
          un’accoglienza calorosa e autentica. Qui, ogni angolo racconta una
          storia di semplicità e amore per la montagna.
        </p>
        <div>
          <Button label="PRENOTA ORA IL TUO SOGGIORNO!" :onClick="goToBooking" />
        </div>
      </section>

      <section class="text-center">
        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>
        <p>
          Cuore di Bosco si trova a Prada di Brentonico, facilmente
          raggiungibile in auto dall’<b>uscita di Rovereto dell’autostrada A22</b>.
        </p>
        <p>
          Vi consigliamo di passare da <b>Mori</b> e salire seguendo le
          indicazioni per l'<b>Altopiano di Brentonico</b> (cartelli marroni).
          Da Brentonico la SP3 vi porterà in pochi minuti a Prada, fate
          attenzione al bivio per Prada sulla sinistra in curva. Parcheggiate
          nel parcheggio libero accanto alla chiesa e al parco giochi, siamo a
          pochi passi sulla sinistra!
        </p>
        <p>Se hai bisogno di aiuto chiamaci e arriviamo!</p>
        <p>
          Una volta arrivati, vi accoglierà il silenzio e la bellezza
          dell’Altopiano di Brentonico, con la sua cornice di verdi montagne.
        </p>
      </section>

      <section class="text-center">
        <h2 class="wp-block-heading has-text-align-center">
          Trovaci con Maps!
        </h2>
        <p style="
            font-family: 'Cardo', serif;
            font-size: 24px;
            text-align: center;
          ">
          Scrivi su maps:<br />
          B&amp;B Cuore di Bosco <br />
          Via Gardesani, 15 – Prada (TN)<br />
          o clicca sulla mappa per aprirla in Google Maps<br />
          e ottenere il percorso.
        </p>
        <a href="https://www.google.com/maps/place/Via+Gardesani,+15,+38060+Prada+TN" target="_blank"
          rel="noopener noreferrer nofollow" style="
            display: block;
            margin-bottom: 10px;
            font-family: 'Cardo', serif;
          ">
          <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4628.566893163929!2d10.95615487755049!3d45.80152017108149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782051cad11ec19%3A0x135a8894e1f97c2d!2sVia%20Gardesani%2C%2015%2C%2038060%20Prada%20TN!5e1!3m2!1sit!2sit!4v1749392711552!5m2!1sit!2sit"
            width="90%" height="300" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </a>
      </section>

      <section class="text-center">
        <div class="text-center">
          <figure class="separator-wrapper">
            <img decoding="async" class="separator" :src="separator" alt="separator" />
          </figure>
        </div>
        <h2 class="wp-block-heading has-text-align-center">
          Hai bisogno di contattarci?
        </h2>
        <p class="has-text-align-center">
          Siamo a tua disposizione! Puoi scriverci, chiamarci o inviarci un
          messaggio su WhatsApp.
        </p>
        <div class="row-buttons">
          <p>
            Contattaci al <a href="tel:+393494960228">+39 349 496 0228</a><br />
            oppure scrivici a
            <a href="mailto:info@cuoredibosco.it">info@cuoredibosco.it</a>
          </p>
        </div>
      </section>

      <section class="breakfast">
        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>
        <h2>A colazione da noi</h2>

        <p>
          La colazione a casa nostra è un momento speciale, da gustare con calma
          e in buona compagnia. Ogni mattina prepariamo con cura un vassoio
          ricco di bontà: dolci casalinghi, pane fresco, salumi e formaggi del
          territorio, frutta di stagione e qualcosa di goloso per iniziare la
          giornata col sorriso.
        </p>
        <figure class="separator-wrapper">
          <img decoding="async" class="image"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/breakfast.png" alt="breakfast" />
        </figure>
        <p>
          Preferisci il dolce o il salato? Hai intolleranze o preferenze
          alimentari?<br />
          Basta farcelo sapere il giorno prima: pensiamo noi a tutto.
        </p>

        <p>
          E se vuoi regalarti un risveglio ancora più lento, possiamo portartela
          in camera, per gustarla con calma, tra il profumo del legno e la luce
          del bosco che filtra dalle finestre.
        </p>

        <p>
          Teniamo moltissimo alla qualità dei nostri ingredienti, e per questo
          ci riforniamo il più possibile da produttori locali.
        </p>
        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>
        <h2>Tutti i progetti nascono da un sogno</h2>
        <p>
          La volontà di una vita più serena e meno di fretta per noi e per la
          nostra famiglia ci ha portato ad un cambio di vita completo, dalla
          brulicante ed asfaltata pianura padana all’Altopiano di Brentonico.
        </p>
        <p>
          E’ stato amore a prima vista. Il nostro posto. Noi ci siamo ripresi il
          nostro tempo lento e la nostra pace, unitevi anche voi!
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import brentonico from "~/assets/images/brentonico.webp";
import separator from "~/assets/images/separator.webp";

useHead({
  title: "Cuore di Bosco B&B",
  meta: [
    {
      name: "description",
      content:
        "Cuore di Bosco è un B&B immerso nella natura delle montagne di Brentonico. Un rifugio accogliente dove riscoprire la tranquillità tra boschi, colazioni genuine e ospitalità autentica.",
    },
    {
      name: "keywords",
      content:
        "b&b, bed and breakfast, Brentonico, montagna, natura, vacanze Trentino, relax, colazione genuina, ospitalità, soggiorno romantico, Cuore di Bosco",
    },
    {
      property: "og:title",
      content: "Cuore di Bosco - B&B tra i boschi di Brentonico",
    },
    {
      property: "og:description",
      content:
        "Un’accoglienza calda e familiare tra i boschi del Trentino. Colazioni fatte in casa, silenzio e natura a pochi passi da Brentonico.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Cuore di Bosco - Il tuo rifugio tra le montagne di Brentonico",
    },
    {
      name: "twitter:description",
      content:
        "Rilassati nel nostro B&B tra i boschi del Trentino. Esperienza autentica, natura, e colazioni fatte in casa.",
    },
  ],
  link: [{ rel: "canonical", href: "https://cuoredibosco.altervista.org" }],
});

const router = useRouter();

const goToBooking = () => {
  router.push("/booking");
};
</script>

<style scoped>
section {
  padding: 0 2em;
  margin: 1em auto;
  max-width: 700px;
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
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.landing-title strong {
  font-weight: 15555;
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
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16pt;
  max-width: 700px;
}

.quote {
  font-style: italic;
  font-weight: 100;
  color: rgb(39, 39, 39);
  font-size: 18pt;
}

.row-buttons {
  justify-content: center;
  display: flex;
  gap: 1em;
}

.breakfast {
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
  margin: 0px;
  justify-content: center;
}

.separator {
  display: block;
  margin: 0.5rem 0;
  /* max-width: 100%; */
  min-width: 100px;
  width: 200px;
}

.text-content p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.image {
  width: 64px;
}

.map {
  border: 0;
  width: 100%;
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

  .map {
    width: auto;
  }
}

@media (max-width: 500px) {
  .separator {
    min-width: 200px;
  }
}
</style>