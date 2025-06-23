<template>
  <div class="page-container">
    <header class="hero">
      <div class="hero-overlay">
        <h1>Regole della Casa</h1>
        <p>Benvenuti nel nostro B&B tra le montagne!</p>
      </div>
    </header>

    <main class="content">
      <!-- Tutte le sezioni -->
      <section v-for="(block, index) in sections" :key="index" class="rule-box">
        <h2>{{ block.title }}</h2>
        <div v-html="block.content"></div>
      </section>

      <section class="rule-box text-center">
        <hr />
        <p class="italic">Auguriamo a tutti un soggiorno indimenticabile tra le nostre montagne!</p>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
// Ogni sezione come titolo + HTML (p o ul)
const sections = [
  {
    title: "TARIFFE E SERVIZI INCLUSI",
    content: `
      <p>Le nostre tariffe comprendono l’utilizzo della camera, bagno privato con accessori, colazione, fornitura di biancheria da letto e da bagno. Tutti i servizi sono pensati per offrirvi il massimo comfort durante la vostra permanenza in montagna.</p>
      <p>Abbiamo scelto di non avere TV nelle camere ma vi offriremo tutto l’intrattenimento possibile per voi e la famiglia! Giochi da tavolo, carte, libri e altro sono a vostra disposizione in caso di brutto tempo e organizziamo merende insieme e giochi!</p>
    `
  },
  {
    title: "PRENOTAZIONI E CONTATTI",
    content: `
      <p>Per informazioni dettagliate sulla nostra struttura o per prenotare il vostro soggiorno, utilizzate il form presente sul nostro sito web nella sezione prenota. Potete anche scriverci direttamente via email o contattarci telefonicamente. Risponderemo rapidamente per confermare la disponibilità e fornirvi tutti i dettagli necessari.</p>
    `
  },
  {
    title: "MODALITÀ DI PAGAMENTO",
    content: `
      <p>Una volta confermata la prenotazione, richiediamo il versamento di un acconto pari al 35% dell’importo totale tramite bonifico bancario o con la prenotazione online. Il saldo finale verrà effettuato all’arrivo in contanti o con carta di credito/bancomat, con rilascio di regolare ricevuta.</p>
      <p><strong>IMPORTANTE:</strong> Versate l’acconto solo dopo aver ricevuto la conferma ufficiale della disponibilità e l’accordo sull’importo.</p>
    `
  },
  {
    title: "POLITICHE DI CANCELLAZIONE",
    content: `
      <p>In caso di cancellazione comunicata tra il 15° e l’8° giorno prima dell’arrivo, restituiremo per intero l’acconto versato. Non sono previsti rimborsi per cancellazioni comunicate negli ultimi 7 giorni o per partenze anticipate rispetto alla prenotazione originaria.</p>
    `
  },
  {
    title: "CHECK-IN E DOCUMENTI",
    content: `
      <p>All’arrivo dovrete presentare un documento d’identità valido. Senza documenti validi non sarà possibile procedere con la registrazione. Trattiamo tutti i dati personali nel rispetto delle normative sulla privacy vigenti.</p>
      <p>Dopo la registrazione e il saldo, vi consegneremo le chiavi dell’ingresso principale e della vostra camera.</p>
    `
  },
  {
    title: "ORARI",
    content: `
      <p><strong>Check-in</strong>: dalle 15:00 alle 18:00. Vi preghiamo di comunicarci l’orario previsto di arrivo per organizzare l’accoglienza.</p>
      <p><strong>Check-out</strong>: entro le 10:30. In caso di camera libera, è possibile trattenersi su richiesta.</p>
    `
  },
  {
    title: "PULIZIE E MANUTENZIONE",
    content: `
      <p>Il servizio di pulizia è incluso all’arrivo e ogni tre giorni. Pulizie straordinarie su richiesta. Vi chiediamo di liberare la camera per le 10:30. Lasciate gli asciugamani da sostituire sul pavimento del bagno.</p>
    `
  },
  {
    title: "COLAZIONE",
    content: `
      <p>La colazione viene servita dalle 7:30 alle 9:30 con prodotti locali. Possiamo anche preparare colazioni in camera o cesti picnic (su richiesta con 24h di anticipo).</p>
    `
  },
  {
    title: "NORME COMPORTAMENTALI",
    content: `
      <p>Vi chiediamo cortesemente di:</p>
      <ul>
        <li>Spegnere luci e riscaldamento quando uscite</li>
        <li>Differenziare la spazzatura</li>
        <li>Rispettare gli orari di silenzio: 14–16 e 22:30–7</li>
        <li>Non ricevere visitatori esterni o aumentare il numero di ospiti per camera</li>
      </ul>
    `
  },
  {
    title: "SERVIZI ESTERNI",
    content: `
      <p>Non rispondiamo di eventuali disservizi non dipendenti dalla nostra gestione (internet, servizi pubblici) legati alla posizione montana.</p>
    `
  },
  {
    title: "ACCESSO ALLA STRUTTURA",
    content: `
      <p>L’ingresso è libero 24h su 24 grazie alle chiavi personali. Vi preghiamo di non disturbare durante gli spostamenti notturni.</p>
      <p>Le chiavi devono essere restituite alla partenza. In caso di smarrimento sarà addebitato il costo della sostituzione.</p>
    `
  }
];
</script>

<style scoped>
.page-container {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f6f3ee;
  color: #2f2f2f;
  min-height: 100vh;
}

.hero {
  background-image: url('/images/hero-montagna.jpg'); /* Cambia con il tuo percorso */
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
</style>
