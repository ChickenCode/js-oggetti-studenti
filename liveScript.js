//Creo un oggetto che descrive uno studente con Nome, Cognome ed Età.
var studente1 = {
    nome: "Mario", 
    cognome: "Rossi",
    età: 45
}
//Stampo con un ciclo for in tutte le proprietà dell'oggetto.
for (var key in studente1) {
    console.log(key + ": " + studente1[key])
}
//Creo un array di oggetti di studenti.
var studenti = [
    studente1,
    
    studente2 = {
        nome: "Anna", 
        cognome: "Franchi",
        età: 18
    },
    
    studente3 = {
        nome: "Roberto", 
        cognome: "Introverso",
        età: 21
    },
    
    studente4 = {
        nome: "Dino", 
        cognome: "Lampa",
        età: 15
    },
]

//Do la possibilità attraverso tre prompt di creare un nuovo oggetto studente ed inserire in ordine Nome, Cognome ed Età.

var nuovoStudente = {
    nome: prompt("Inserisci il nome del nuovo studente"), 
    cognome: prompt("Inserisci il cognome del nuovo studente"),
    età: parseInt(prompt("Inserisci l'età del nuovo studente"))
}

studenti.push(nuovoStudente);

//Ciclo tutti gli studenti e stampo per ognuno di essi Nome e Cognome.
for (i = 0; i < studenti.length; i++) {
    
    for (var key in studenti[i]) {
        console.log(key + ": " + studenti[i][key])
    }
}


