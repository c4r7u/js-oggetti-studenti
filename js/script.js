const studente = {
    nome: 'Nicolò',
    cognome: 'Carluccio',
    eta: 19
}


for (let key in studente) {
    console.log(key + ': ' + studente[key]);
}



const studenti = [
    {
        nome: 'Emanuele',
        cognome: 'Cardone',
        eta: 32  
    },
    {
        nome: 'Sebastian',
        cognome: 'Lillo',
        eta: 21  
    },
    {
        nome: 'Guido',
        cognome: 'Rossi',
        eta: 47  
    },
    {
        nome: 'Matteo',
        cognome: 'Ruggieri',
        eta: 52  
    }
];


for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + ': ' + studenti[i].cognome);
}


const nomeUtente = prompt('Inserisci il tuo nome:');
const cognomeUtente = prompt('Inserisci il tuo cognome:');
const etaUtente = parseInt(prompt('Inserisci la tua età:'));

studenti.push({
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente
});

console.log(studenti);