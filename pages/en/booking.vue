<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="house" :src="camere"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">BOOK NOW</h1>
      </div>
    </div>

    <section class="text-center">
      <p>Welcome to <strong>B&amp;B <em>Cuore di Bosco</em></strong>,<br>a haven immersed in the nature of the
        <strong>Vallagarina</strong>,<br>on the <strong>Brentonico Plateau</strong>, <strong>Europe’s Garden</strong>.
        <br>Surrounded by lush mountains, time slows down<br>and tranquility reigns supreme.
      </p>
      <p>There are many B&amp;Bs, but we hope to offer you<br> a mix of special experiences: the beauty of the
        surrounding mountains,<br>
        our passion for cooking and hospitality, and all the enthusiasm<br> we put into our work!</p>
      <p>For special dietary needs like vegetarian,<br> vegan, gluten-free, lactose-free, or others—we’re here for you!
        <br> Just let us know before your arrival<br> so we can prepare accordingly!
      </p>
      <p> See you soon!</p>
    </section>

    <!-- Booking widget placeholder -->

    <div class="text-center">
      <figure class="separator-wrapper">
        <img decoding="async" class="separator" :src="separator" alt="separator" />
      </figure>
    </div>

    <section class="intro">
      <h2 class="intro-title">Discover our rooms</h2>
      <blockquote class="intro-text">
        <p>B&amp;B Cuore di Bosco is our home and yours in the
          mountains—a peaceful refuge to rest your mind and heart.</p>
        <p>Upon request, baby kit including crib with mattress, sheets and blankets, changing table, and bottle warmer.
        </p>
      </blockquote>
    </section>

    <section class="rooms">
      <div class="card text-center">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/blueberry.png" alt="blueberry">
        </figure>
        <div class="room-info">
          <h2>BLUEBERRY</h2>
          <p class="room-short">Spacious and welcoming, ideal for families seeking comfort and tranquility.</p>
          <p>Double room with 23 sqm master bedroom and a second room with bunk beds. Wardrobe, chest of drawers,
            relaxation area with armchair, minibar, coffee machine, and kettle. Bathroom with shower, sink, and bidet.
            Personal hygiene products, cleaning, and linens included. Perfect for families with kids, offering all the
            space and comfort you need!</p>
          <h3>2 to 5 beds available</h3>
        </div>
      </div>

      <div class="card text-center">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/raspberry.png" alt="raspberry">
        </figure>
        <div class="room-info">
          <h2>RASPBERRY</h2>
          <p class="room-short">Fresh and bright, perfect for nature lovers.</p>
          <p>Spacious 30 sqm double or triple room with double bed and optional third bed, wardrobe, chest of drawers,
            relaxation area with sofa, minibar, coffee machine, and kettle. Bathroom with shower, sink, and bidet.
            Personal hygiene products, cleaning, and linens included. Great for families or friends, with panoramic
            views and peace!</p>
          <h3>2 to 3 beds available</h3>
        </div>
      </div>
    </section>

    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="service-image" alt="house" :src="colazioni"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px" />
      <div class="landing-text">
        <h1 class="page-title">OUR SERVICES</h1>
      </div>
    </div>

    <section>
      <div class="wp-block-group">
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/wifi.png"
            alt="FREE WIFI" />
          <figcaption>FREE WIFI</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/towels-1.png"
            alt="TOWELS AND LINENS INCLUDED" />
          <figcaption>TOWELS AND LINENS INCLUDED</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/products.png"
            alt="COMPLIMENTARY AMENITIES" />
          <figcaption>COMPLIMENTARY AMENITIES</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/shower.png"
            alt="PRIVATE SHOWER AND BATHROOM" />
          <figcaption>PRIVATE SHOWER AND BATHROOM</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/breakfast.png"
            alt="SWEET AND SAVOURY BREAKFAST" />
          <figcaption>SWEET AND SAVOURY BREAKFAST</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/kettle.png"
            alt="KETTLE SET" />
          <figcaption>KETTLE SET</figcaption>
        </figure>
        <figure class="icon"><img
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/laundry-machine.png"
            alt="LAUNDRY SERVICE" />
          <figcaption>LAUNDRY SERVICE</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/bicycle.png"
            alt="BICYCLES AVAILABLE" />
          <figcaption>BICYCLES AVAILABLE</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/toys.png"
            alt="TOYS FOR CHILDREN" />
          <figcaption>TOYS FOR CHILDREN</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/pencils.png"
            alt="CHILDREN’S SUPPLIES" />
          <figcaption>CHILDREN’S SUPPLIES</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/crib.png"
            alt="BABY CRIB" />
          <figcaption>BABY CRIB</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/coloring.png"
            alt="MATERIALS FOR CHILDREN" />
          <figcaption>MATERIALS FOR CHILDREN</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/baby-carrier.png"
            alt="BABY CARRIERS" />
          <figcaption>BABY CARRIERS</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/bookshelf.png"
            alt="LIBRARY FOR ADULTS AND CHILDREN" />
          <figcaption>LIBRARY FOR ADULTS AND CHILDREN</figcaption>
        </figure>
        <figure class="icon"><img src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/06/picnic-basket.png"
            alt="PICNIC SERVICE" />
          <figcaption>PICNIC SERVICE</figcaption>
        </figure>
      </div>
    </section>

    <section class="text-left">
      <p><b>Family Services</b></p>

      <p>We know how tricky it can be to travel and relax with one or more kids!<br>
        That’s why we’ve tried to make life easier and vacations more relaxing for parents! Here you’ll find:</p>
      <p>BABY KIT: We have everything you need! Changing table with tub or potty, high chair, bottle warmer or microwave
        in the breakfast room,
        in-room minibar, stroller, baby carrier (6–36 months or preschool 3–6 years, or wraps with deposit), bathroom
        step stool, children’s plates, cutlery, and cups,
        library and play area (under development).</p>
      <p>WRITE TO US! Do they have breakfast preferences? Let us know and we’ll get ready!<br> Gray day?
        Let’s organize a snack together! Treats for the kids and a relaxing aperitif for the grown-ups!</p>
      <p>BIKE RENTAL: Our bikes for adults and children (with helmets!) are at your disposal (with deposit)</p>
      <p>PICNIC DAY: Heading into the woods? We’ll prepare the basket—just let us know 1–2 days in advance with your
        preferences and time and we’ll have it ready to go. (paid service)</p>

      <p><b>In-Room Services</b></p>
      <p>In our well-equipped rooms you’ll find:</p>
      <p>Bathroom with shower, bidet, toilet<br>
        Towel kit for each guest<br>
        Regular cleaning<br>
        Refillable eco-friendly hygiene products<br><br>
        Welcome gift<br>
        Silent minibar<br>
        Glasses<br><br>
        Eco-friendly cleaning products, broom and dustpan<br>
        Clothes rack and pegs on the balcony (weather permitting)
      </p>

      <p><b>Other services for you!</b></p>
      <p>Free Wi-Fi<br>
        Storage for bikes / boots / skis and other gear<br>
        Express laundry service on request with certified ecological, biodegradable products (paid service)<br>
        Reading and relaxation corner (open 3–6 pm) with a large terrace (weather permitting)<br>
        You’ll also find all maps and brochures from APT Rovereto and Vallagarina at the dedicated stand.
      </p>
    </section>
  </div>
</template>


<script lang="ts" setup>
import camere from "~/assets/images/camere.webp";
import colazioni from "~/assets/images/colazioni.webp";
import separator from "~/assets/images/separator.webp";

definePageMeta({
  layout: 'english'
});

useHead({
  title: "Book Your Stay | Cuore di Bosco - Prada di Brentonico",
  meta: [
    {
      name: "description",
      content:
        "Book your stay at B&B Cuore di Bosco, surrounded by nature in Prada di Brentonico. Comfort, relaxation, and authenticity in the heart of Trentino.",
    },
    {
      name: "keywords",
      content:
        "B&B Cuore di Bosco, Prada di Brentonico, bed and breakfast Trentino, mountain stay, B&B booking, nature vacation",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.cuoredibosco.it/en/booking",
    },
  ],
});
</script>

<style scoped>
section {
  margin: 1em auto;
  max-width: 1200px;
  padding: 2rem;
}

.bg-red {
  background-color: red;
}

.page-title {
  font-size: 42pt;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
  background-color: var(--color-background);
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
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

.room-list {
  display: flex;
  flex-direction: column;
  font-size: 14pt;
  gap: 1em;
}

.room-list div {
  text-align: left;
}

.rooms {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1em;
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

.service-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 46%;
  display: block;
  opacity: 0.7;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .rooms {
    flex-direction: column;
    align-items: center;
  }

  .landing-text {
    bottom: 1rem;
  }

  .page-title {
    font-size: 2rem;
  }
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

  .icon {
    flex: 0 1 45%;
  }
}

@media (max-width: 500px) {
  .separator {
    min-width: 200px;
  }

  .icon {
    flex: 0 1 100%;
  }
}
</style>