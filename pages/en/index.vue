<template>
  <div class="container">
    <div>
      <div class="welcome">
        <img decoding="async" width="1400" height="800" class="landing-image" alt="panorama" :src="brentonico"
          data-object-fit="cover" loading="eager" fetchpriority="high" />
        <span aria-hidden="true"></span>
        <div class="landing-text">
          <h1 class="landing-title">
            Rediscover your time,<br />
            rediscover peace.
          </h1>
          <Button label="BOOK NOW" :onClick="goToBooking" />
        </div>
      </div>

      <section class="overview">
        <p class="quote">
          B&B Cuore di Bosco is our home and yours in the mountains,<br />
          a refuge of peace and quiet where you can rest your mind and heart.
        </p>

        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>

        <p>
          Welcome to <strong>B&B Cuore di Bosco</strong>,<br />
          a refuge immersed in the nature of the
          <strong>Vallagarina</strong>,<br />
          on the <strong>Brentonico Plateau, the Garden of Europe</strong>.<br />
          Surrounded by lush mountains, time slows down<br />
          and tranquility reigns supreme.
        </p>
        <p>
          Our stone house, with wooden furnishings and detailed touches, offers
          a warm and authentic welcome. Here, every corner tells a story
          of simplicity and love for the mountains.
        </p>
        <div>
          <Button label="BOOK YOUR STAY NOW!" :onClick="goToBooking" />
        </div>
      </section>

      <section class="text-center">
        <figure class="separator-wrapper">
          <img decoding="async" class="separator" :src="separator" alt="separator" />
        </figure>
        <p>
          Cuore di Bosco is located in Prada di Brentonico, easily
          reachable by car from the <b>Rovereto exit of the A22 highway</b>.
        </p>
        <p>
          We recommend passing through <b>Mori</b> and going up following the
          signs for the <b>Brentonico Plateau</b> (brown signs).
          From Brentonico, SP3 will take you to Prada in a few minutes. Watch
          for the left turn to Prada on a curve. Park in the free parking lot
          next to the church and playground—we're just a few steps away on the left!
        </p>
        <p>If you need help, call us and we’ll come!</p>
        <p>
          Once you arrive, you will be welcomed by the silence and beauty
          of the Brentonico Plateau, with its frame of green mountains.
        </p>
      </section>

      <section class="text-center">
        <h2 class="wp-block-heading has-text-align-center">
          Find us with Maps!
        </h2>
        <p>
          Type in Maps:<br />
          B&B Cuore di Bosco <br />
          Via Gardesani, 15 – Prada (TN)<br />
          or click the button below to open it directly.
        </p>
        <a href="https://www.google.com/maps/place/Via+Gardesani,+15,+38060+Prada+TN" target="_blank"
          rel="noopener noreferrer nofollow">
          <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4628.566893163929!2d10.95615487755049!3d45.80152017108149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782051cad11ec19%3A0x135a8894e1f97c2d!2sVia%20Gardesani%2C%2015%2C%2038060%20Prada%20TN!5e1!3m2!1sit!2sit!4v1749392711552!5m2!1sit!2sit&hl=en"
            width="90%" height="300" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            lang="en">
          </iframe>
        </a>
      </section>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useRouter } from "vue-router";
import brentonico from "~/assets/images/brentonico.webp";
import separator from "~/assets/images/separator.webp";

definePageMeta({
  layout: 'english'
});

useHead({
  title: "B&B Cuore di Bosco | Family Mountain Holidays - Brentonico, Trentino",
  meta: [
    {
      name: "description",
      content:
        "Family-friendly B&B on the Brentonico Plateau, Trentino. Mountain holidays with children: homemade breakfasts, baby kit, nature and peace in the Monte Baldo Nature Park.",
    },
    {
      name: "keywords",
      content:
        "family B&B, mountain holidays with kids, bed and breakfast Brentonico, kids stay free mountains, family vacation Trentino, B&B children Trentino, Brentonico Plateau, homemade breakfast, Cuore di Bosco, Monte Baldo, family hotel Trentino",
    },
    {
      property: "og:title",
      content: "B&B Cuore di Bosco - Family Holidays in the Woods of Brentonico",
    },
    {
      property: "og:description",
      content:
        "Family-friendly B&B on the Brentonico Plateau. Homemade breakfasts, baby kit, bikes and plenty of space in the nature of Trentino.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.cuoredibosco.it/en",
    },
    {
      property: "og:image",
      content: "https://www.cuoredibosco.it/images/cuore-casa.webp",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "B&B Cuore di Bosco - Family Mountain Holidays in Trentino",
    },
    {
      name: "twitter:description",
      content:
        "Family-friendly B&B on the Brentonico Plateau. Nature, homemade breakfasts and child-friendly services.",
    },
  ],

  link: [{ rel: "canonical", href: "https://www.cuoredibosco.it/en" }],
});

const router = useRouter();

const goToBooking = () => {
  router.push("/en/booking");
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
  display: flex;
  flex-direction: column;
}

.overview {
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 700px;
}

.quote {
  font-style: italic;
  font-weight: 100;
  color: rgb(39, 39, 39);
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