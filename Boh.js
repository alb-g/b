// Frequenza di aggiornamento del widget: ogni 60 secondi
const refreshFrequency = 60000;

// Comando per ottenere i dati
const command = `
curl -s https://meteoregionelazio.it/rete/stazione.php?id=RM-080
`;

// Funzione di renderizzazione
function render(output) {
  // Usa una regex per trovare il valore della temperatura nel contenuto HTML
  const temperaturaMatch = output.match(/<span class="dato_grande">([^<]+)<\/span>/);
  const umiditaMatch = output.match(/<span class="dato_grande">(\\d+(\\.\\d+)?)%<\/span>/);

  // Estrai i valori se le regex trovano una corrispondenza
  const temperatura = temperaturaMatch ? temperaturaMatch[1].trim() : 'N/D';
  const umidita = umiditaMatch ? umiditaMatch[1].trim() : 'N/D';

  // Restituisce l'HTML con i dati e il CSS inline
  return `
  <style>
    .widget {
      position: absolute; /* Usa absolute o fixed a seconda delle tue necessità */
      top: 85%;
      left: 1%;
      z-index: 1000; /* Porta il widget in primo piano */
      width: auto; /* Imposta una larghezza fissa */
      height: auto; /* Imposta un’altezza fissa */
      background: rgba(0, 0, 0, 0.5); /* Sfondo traslucido per visibilità */
      color: white; /* Colore del testo */
      padding: 3px; /* Spaziatura interna */
      font-size: 20px; /* Dimensione del testo */
    }
  </style>
  <div class='widget'>
    <p>${temperatura}</p>
    <p>${umidita}%</p>
  </div>
  `;
}
