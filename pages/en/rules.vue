<template>
  <div class="page-container">
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="forest"
        src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/07/regole-scaled.jpg" data-object-fit="cover"
        sizes="(max-width: 1200px) 100vw, 1200px" /><span aria-hidden="true" style="background-color: #526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">Rules</h1>
      </div>
    </div>

    <main class="content">
      <section v-for="(block, index) in sections" :key="index" class="rule-box">
        <h2>{{ block.title }}</h2>
        <div v-html="block.content"></div>
      </section>

      <section class="rule-box text-center">
        <hr />
        <p class="italic">
          We wish everyone an unforgettable stay among our mountains!
        </p>
      </section>
    </main>
  </div>
</template>


<script lang="ts" setup>
definePageMeta({
  layout: 'english'
});

const sections = [
  {
    title: "RATES AND INCLUDED SERVICES",
    content: `
      <p>Our rates include the use of the room, a private bathroom with amenities, breakfast, bed linen, and towels. All services are designed to offer you maximum comfort during your stay in the mountains.</p>
      <p>We have chosen not to have TVs in the rooms, but we will provide all the entertainment possible for you and your family! Board games, cards, books, and more are available in case of bad weather, and we also organize snacks and games together!</p>
    `,
  },
  {
    title: "BOOKINGS AND CONTACTS",
    content: `
      <p>For detailed information about our property or to book your stay, please use the booking form on our website in the “Book” section. You can also write to us directly via email or contact us by phone. We will respond quickly to confirm availability and provide all necessary details.</p>
    `,
  },
  {
    title: "PAYMENT METHODS",
    content: `
      <p>Once the booking is confirmed, we require a deposit of 35% of the total amount via bank transfer or online booking. The remaining balance will be paid upon arrival in cash or by credit/debit card, with an official receipt issued.</p>
      <p><strong>IMPORTANT:</strong> Please make the deposit only after receiving official confirmation of availability and agreement on the amount.</p>
    `,
  },
  {
    title: "CANCELLATION POLICY",
    content: `
      <p>If the cancellation is communicated between the 15th and 8th day before arrival, we will fully refund the deposit paid. No refunds are provided for cancellations communicated in the last 7 days or for early departures compared to the original booking.</p>
    `,
  },
  {
    title: "CHECK-IN AND DOCUMENTS",
    content: `
      <p>Upon arrival, you must present a valid ID. Without valid documents, registration cannot be completed. All personal data is handled in compliance with current privacy regulations.</p>
      <p>After registration and payment, we will hand over the keys to the main entrance and your room. To speed up check-in, you may alternatively send us clear copies of your documents via WhatsApp or email the day before arrival.</p>
    `,
  },
  {
    title: "TIMES",
    content: `
      <p><strong>Check-in</strong>: from 3:00 PM to 6:00 PM. Please inform us of your expected arrival time so we can organize your welcome.</p>
      <p><strong>Check-out</strong>: by 10:30 AM. If the room is available, it is possible to stay longer upon request.</p>
    `,
  },
  {
    title: "SECURITY AND LIABILITY",
    content: `<p>We recommend not leaving valuables unattended in the rooms or common areas. Rooms do not have safes, so please always lock doors and windows when leaving.</p>
    <p>The property is not responsible for theft, loss, or damage to personal belongings, nor for damage caused by or to third parties. Any damage to the property or furnishings must be reported immediately and compensated.</p>`,
  },
  {
    title: "HOUSE RULES",
    content: `<p>For the safety of all guests, our family, and for hygiene reasons:</p>
    <ul>
      <li>We love animals, but at the moment we cannot accommodate pets inside the property to ensure compliance with hygiene and safety regulations and to protect guests with health issues.</li>
      <li>Cooking or using stoves in the rooms is prohibited. Mini-fridges and kettles are available in the rooms, while a microwave and coffee machine can be found in the breakfast room.</li>
      <li>Smoking is strictly prohibited in all indoor and outdoor areas of the property. We also advise extreme caution in forests and along roads, as mountain areas are often prone to wildfires — the forests, air, and livestock thank you!</li>
    </ul>`,
  },
  {
    title: "CLEANING AND MAINTENANCE",
    content: `
      <p>Room cleaning and linen change are included upon arrival and every three days for long stays. We ask you to use the bathroom facilities correctly and respect the premises. Extra cleaning or linen changes are available upon request and will incur an additional cost. Cleaning materials will be available upon request in case of need.</p>
      <p>To facilitate cleaning, please vacate the room by 10:30 AM, arrange personal items neatly, and leave towels to be replaced on the bathroom floor. If you do not require cleaning, prefer to avoid it, or need it at different times for personal reasons, please inform us to arrange accordingly.</p>
    `,
  },
  {
    title: "BREAKFAST",
    content: `
      <p>Breakfast is served in our breakfast room from 7:30 AM to 9:30 AM. We offer local products and mountain specialties to start your outdoor days in the best way.</p>
      <p>We can also prepare breakfast to be enjoyed in your room (on request) and picnic baskets to take with you (paid service, book at least 24 hours in advance).</p>
    `,
  },
  {
    title: "BEHAVIORAL RULES",
    content: `
      <p>Please kindly:</p>
      <ul>
        <li>Turn off lights and heating when leaving</li>
        <li>Sort your waste for recycling</li>
        <li>Respect quiet hours: 2:00–4:00 PM and 10:30 PM–7:00 AM</li>
        <li>Do not receive outside visitors or increase the number of guests per room</li>
      </ul>
    `,
  },
  {
    title: "EXTERNAL SERVICES",
    content: `
      <p>We are not responsible for any disruptions not under our management (internet, telephone network, public services) due to the mountain location.</p>
    `,
  },
  {
    title: "ACCESS TO THE PROPERTY",
    content: `
      <p>Access is available 24/7 thanks to personal keys. Please avoid disturbing others during nighttime movements.</p>
      <p>Keys must be returned upon departure. In case of loss, the replacement cost will be charged.</p>
    `,
  },
];


useHead({
  title: "House Rules | Cuore di Bosco - Prada di Brentonico",
  meta: [
    {
      name: "description",
      content:
        "Read the house rules of B&B Cuore di Bosco to ensure a peaceful and respectful stay for everyone.",
    },
    {
      name: "keywords",
      content:
        "B&B rules, responsible stay, Cuore di Bosco rules, vacation home guidelines",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.cuoredibosco.it/en/rules" }],
});
</script>

<style scoped>
.welcome {
  position: relative;
  overflow: hidden;
}

.landing-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center 50%;
  display: block;
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
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.page-container {
  font-family: "Segoe UI", sans-serif;
  background-color: #f6f3ee;
  color: #2f2f2f;
  min-height: 100vh;
}

.hero {
  background-image: url("/images/hero-montagna.jpg");
  /* Cambia con il tuo percorso */
  background-size: cover;
  background-position: center;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  background-color: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay h1 {
  font-size: 2.5rem;
  margin: 0;
}

.hero-overlay p {
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 0.5rem;
}

.content {
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.rule-box {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.8rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.rule-box h2 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  border-left: 4px solid #8d6748;
  padding-left: 0.5rem;
  color: #493e36;
}

.rule-box p,
.rule-box li {
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.rule-box ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.page-title {
  font-size: 64pt;
  font-variant: small-caps;
}

@media (max-width: 1024px) {
  #page {
    margin-top: 50px;
  }

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
</style>
