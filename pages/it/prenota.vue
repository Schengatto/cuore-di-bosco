<template>
  <div>
    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="landing-image" alt="casa" :src="camere"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px"><span aria-hidden="true"
        style="background-color:#526a71"></span>
      <div class="landing-text">
        <h1 class="page-title text-white">PRENOTA</h1>
      </div>
    </div>

    <section class="text-center">
      <p>Benvenuti al&nbsp;<strong>B&amp;B&nbsp;<em>Cuore di Bosco</em></strong>,<br>un rifugio immerso nella natura
        della&nbsp;<strong>Vallagarina</strong>,<br>sull’A<strong>ltopiano di Brentonico</strong>,&nbsp;<strong>il
          giardino d’Europa</strong>.<br>Circondati da rigogliose montagne, il tempo rallenta<br>e la tranquillità regna
        sovrana.</p>
      <p>Di b&b ce ne sono tanti, ma noi speriamo di offrirvi<br> un mix di esperienze speciali: la bellezza delle
        montagne intorno,<br>
        la passione per la cucina e l’ospitalità e tutto l’entusiasmo<br> che mettiamo nel nostro lavoro!</p>
      <p>Per esigenze alimentari particolari come vegetariano,<br> vegano, no glutine, no lattosio e altre siamo a tua
        disposizione,<br> ti chiediamo di avvisarci prima dell’arrivo <br>per poterci organizzare al meglio!</p>
      <p> Ci vediamo presto!</p>
    </section>

    <!-- <section>
      <iframe src="https://www.bed-and-breakfast.it/booking-engine/widget.cfm?id_struttura=TUO_ID_STRUTTURA"
        width="100%" height="600" frameborder="0" scrolling="auto" style="border: none;">
      </iframe>
    </section> -->

    <div class="text-center">
      <figure class="separator-wrapper">
        <img decoding="async" class="separator" :src="separator" alt="separator" />
      </figure>
    </div>

    <section class="intro">
      <h2 class="intro-title">Scopri le nostre camere</h2>
      <blockquote class="intro-text">
        <p>B&amp;B Cuore di Bosco è la nostra e la vostra casa in
          montagna, un rifugio di pace e quiete dove riposare mente e cuore</p>
        <p>A richiesta kit bimbo con lettino con materasso, lenzuola e coperte, fasciatoio e scalda biberon. A disposizione anche spondine per letto, vasino e scalini per il bagno per tutte le età.</p>
      </blockquote>
    </section>

    <section class="rooms">
      <div class="card text-center">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/raspberry.png" alt="lampone">
        </figure>
        <div class="room-info">
          <h2>LAMPONE</h2>
          <p class="room-short">Spaziosa e accogliente, adatta a famiglie che desiderano comfort e tranquillità.</p>
          <p>Ampia camera da 24 mq con letto matrimoniale e due letti singoli. Armadio con cassettiera, bollitore, frigobar.
            Bagno privato con doccia, lavabo e bidet. Prodotti per igiene personale, pulizia e biancheria inclusi.</p><p>Culla attrezzata, sponde per letti e fasciatoio su richiesta.
             Per famiglie con bambini tutto lo spazio e le comodità necessarie!</p>
          <h3>da 2 a 4 posti letto adulti</h3>
        </div>
      </div>

      <div class="card text-center">
        <figure>
          <img decoding="async" width="128" height="128"
            src="https://cuoredibosco.altervista.org/wp-content/uploads/2025/04/blueberry.png" alt="mirtillo">
        </figure>
        <div class="room-info">
          <h2>MIRTILLO</h2>
          <p class="room-short">Fresca e luminosa, perfetta per chi ama la natura.</p>
          <p>Ampia camera matrimoniale da 24 mq con letto matrimoniale. Armadio con cassettiera, zona relax con divano e scrivania.
            Bagno privato con doccia, lavabo e bidet. Prodotti per igiene personale, pulizia e biancheria inclusi. 
            </p><p>Culla attrezzata, sponde per letti e fasciatoio su richiesta.
            Per famiglia o tra amici, con vista panoramica e pace!</p>
          <h3>da 2 posti letto adulti</h3>
        </div>
      </div>
    </section>

    <div class="welcome">
      <img decoding="async" width="1400" height="800" class="service-image" alt="casa" :src="colazioni"
        data-object-fit="cover" sizes="(max-width: 1200px) 100vw, 1200px" />
      <div class="landing-text">
        <h1 class="page-title">I NOSTRI SERVIZI</h1>
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

    <section class="text-left">
      <p><b>Servizi per famiglie</b></p>

      <p>Sappiamo bene quanto è complicato spostarsi e rilassarsi con uno o più figli!<br>
        Per questo abbiamo cercato di rendere la vita più facile e la vacanza più rilassata ai genitori! Da noi
        troverete:</p>
      <p>BABY KIT: Abbiamo tutto quello che serve! Fasciatoio con vaschetta per bagno o vasino, seggiolone,
        scaldabiberon o microonde a disposizione in sala colazione,
        frigobar in camera, passeggino, marsupio 6/36 mesi o preschool 3-6 anni o fasce (con cauzione), scaletta o
        gradino per il bagno, piattini, posate e bicchieri da bimbi,
        libreria ed angolo giochi attrezzato (in realizzazione).</p>
      <p>SCRIVICI! A colazione preferiscono qualcosa di particolare? Informateci e ci attrezziamo! <br> Giornata grigia?
        Organizziamo la merenda insieme! Merenda per i piccoli e aperitivo relax per i grandi!</p>
      <p>NOLEGGIO BICI: le nostre bici per grandi e piccoli (con casco!) sono a vostra disposizione (con cauzione)</p>
      <p>PIC NIC DAY: Gita nel bosco? Prepariamo noi il cestino, preavvisateci 1-2 giorni prima con le vostre preferenze
        e l’orario e provvediamo al cesto pronto da portare via. (servizio a pagamento)</p>
      <p></p>

      <p><b>Servizi in camera</b></p>
      <p>Nelle nostre stanze attrezzate troverai:</p>
      <p>Bagno con doccia, bidet, wc <br>
        Kit asciugamani per ogni ospite<br>
        Pulizia regolare<br>
        Prodotti ecologici ricaricabili per l’igiene personale<br>
        <br>
        Omaggio di benvenuto<br>
        Bicchieri e tazze a disposizione<br>
        <br>
        Materiale ecologico per pulizie, scopa e paletta<br>
        Stendino e mollette in balcone (clima permettendo)
      </p>

      <p><b>Altri servizi per te!</b></p>
      <p>Wi-fi gratuita <br> Servizio deposito bici / scarponi / sci e altro materiale <br>
        Servizio a richiesta di lavanderia express con prodotti ecologici, biodegradabili certificati (a pagamento)<br>
        Angolo libreria e relax (orario 15-18) con ampia terrazza (clima permettendo)<br>
        Nell’apposito stand inoltre troverei tutte le mappe e i depliant informativi di APT Rovereto e Vallagarina.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import camere from "~/assets/images/camere.webp";
import colazioni from "~/assets/images/colazioni.webp";
import separator from "~/assets/images/separator.webp";

useHead({
  title: "Prenota il tuo soggiorno | Cuore di Bosco - Prada di Brentonico",
  meta: [
    {
      name: "description",
      content:
        "Prenota il tuo soggiorno al B&B Cuore di Bosco, immerso nella natura di Prada di Brentonico. Comfort, relax e autenticità nel cuore del Trentino.",
    },
    {
      name: "keywords",
      content:
        "B&B Cuore di Bosco, Prada di Brentonico, bed and breakfast Trentino, soggiorno in montagna, prenotazione B&B, vacanza natura",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.cuoredibosco.it/it/prenota",
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