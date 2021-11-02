/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
Quando l’utente clicca su ogni cella, la cella cliccata si colora*/


/* creiamo le variabili necessarie per i bottoni in pagina che genereranno le celle */

const bottonEasy = document.getElementById("easy");

const bottonIntermediate = document.getElementById("intermediate");

const bottonHard = document.getElementById("hard");

/* creiamo la variabile per il contenitore delle celle */

const containerDiv = document.getElementById("container");

/* creiamo una funzione comune per generare le celle in base al livello */

function generationElement (elementGenerated, classAdded) {

    let cells = document.createElement(elementGenerated);

    cells.classList.add(classAdded);

    return cells

}

/* andiamo a riportare la funzione e a creare il numero di celle necessarie in base al livello scelto dall'utente */

/* generazione facile (100 caselle) */

bottonEasy.addEventListener ("click",

    function(){

        /* creiamo un ciclo per 100 caselle */

        for (let i = 1; i < 101; i++){

            let newElement = generationElement("div", "squareEasy");

            /* aggiungiamo la funzione di click che va a colorare la cella che viene selezionata dall'utente */

            newElement.addEventListener("click",
            
            function(){

                newElement.classList.add("clicked");

                /* andiamo a generare i numeri all'interno delle celle */

                /* newElement.innerHTML = i; */

                const squareSpan = `<span>${i}</span>`;
                newElement.innerHTML = squareSpan;

            }
            
            )

            containerDiv.append(newElement);

        }

    }

)

/* generazione intermedia (81 caselle) */

bottonIntermediate.addEventListener ("click",

    function(){

        /* creiamo un ciclo per 81 caselle */

        for (let i = 1; i < 82; i++){

            let newElement = generationElement("div", "squareInterm");

            /* aggiungiamo la funzione di click che va a colorare la cella che viene selezionata dall'utente */

            newElement.addEventListener("click",
            
            function(){

                newElement.classList.add("clicked");

                /* andiamo a generare i numeri all'interno delle celle */

                /* newElement.innerHTML = i; */

                const squareSpan = `<span>${i}</span>`;
                newElement.innerHTML = squareSpan;

            }
            
            )

            containerDiv.append(newElement);

        }

    }

)

/* generazione difficile (49 cselle) */

bottonHard.addEventListener ("click",

    function(){

        /* creiamo un ciclo per 49 caselle */

        for (let i = 1; i < 50; i++){

            let newElement = generationElement("div", "squareHard");

            /* aggiungiamo la funzione di click che va a colorare la cella che viene selezionata dall'utente */

            newElement.addEventListener("click",
            
            function(){

                newElement.classList.add("clicked");

                /* andiamo a generare i numeri all'interno delle celle */

                /* newElement.innerHTML = i; */

                const squareSpan = `<span>${i}</span>`;
                newElement.innerHTML = squareSpan;

            }
            
            )

            containerDiv.append(newElement);

        }

    }

)

