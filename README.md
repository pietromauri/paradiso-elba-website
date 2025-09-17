# Paradiso Elba Website

Questo è il repository per il sito web di "Paradiso Elba", un moderno appartamento per vacanze situato sull'Isola d'Elba, pensato per turisti che cercano un'esperienza di relax e avventura.

## Funzionalità Principali

*   **Homepage:** Una pagina di benvenuto accattivante che introduce l'appartamento e l'esperienza elbana.
*   **Appartamento:** Una sezione dettagliata che descrive gli spazi e i comfort dell'appartamento.
*   **Posizione:** Informazioni sulla posizione dell'appartamento e sulle attrazioni vicine.
*   **Attività:** Suggerimenti su attività ed escursioni da fare sull'isola.
*   **Galleria:** Una galleria di immagini filtrabile per categorie: Panorami, Tramonti, Spiagge e Vita all'Aperto.
*   **Recensioni:** Una raccolta delle recensioni lasciate dagli ospiti.
*   **Contatti:** Un modulo per richiedere informazioni e prenotare.

## Tecnologie Utilizzate

*   **Frontend:** React, TypeScript, Vite
*   **Librerie Principali:**
    *   `react-leaflet` per le mappe interattive.
    *   `sharp` per l'elaborazione delle immagini.
*   **Styling:** Tailwind CSS

## Come Iniziare

Per eseguire il progetto in locale, segui questi passaggi:

1.  **Clonare il repository:**
    ```bash
    git clone https://github.com/pietromauri/paradiso-elba-website.git
    cd paradiso-elba-website
    ```

2.  **Installare le dipendenze:**
    ```bash
    npm install
    ```

3.  **Avviare il server di sviluppo:**
    Il sito sarà disponibile su `http://localhost:5173`.
    ```bash
    npm run dev
    ```

## Struttura del Progetto

*   `src/components`: Contiene i componenti React riutilizzabili che formano le varie sezioni del sito.
*   `src/images`: Contiene tutte le immagini utilizzate nel progetto, suddivise per categoria.
*   `constants.tsx`: Definisce le costanti utilizzate nell'applicazione, come i link di navigazione e i dati della galleria.
*   `App.tsx`: Il componente principale che gestisce la navigazione e il layout delle pagine.
