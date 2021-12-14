


/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

//          COME AVREI FATTO SOLITAMENTE

/*
arr = ['piadina','menestrello','gianduiotto','babbo natale','obiwan'];
b = parseInt(prompt('inserisci un numero: '));
while (b >= arr.length){
    b = parseInt(prompt('inserisci un numero: '));

}
a = parseInt(prompt('inserisci un numero, minore del precedente: '));
while (a > b || a == b) {
    a = parseInt(prompt('inserisci un numero, minore del precedente: '));
}

console.log(a,b,arr.length, arr);
for (let index = a; index < b; index++) {
    const element = arr[index];
    console.log(element);
}
*/

