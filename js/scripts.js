

// to ask how many kilometres does the user wants to travel
const Kilometres= prompt('Quanti chilometri vuoi percorrere?');
console.log('Kilometres', Kilometres);


// ask user age
const age= prompt('Quanti anni hai?');
console.log ('Age', age);

// basic price
const BasicPrice= (0.21 * Kilometres);

// final price
let FinalPrice= 0;


// if user is more than 18yo: discount of 20%
if( age < 18 ) {
    FinalPrice= (BasicPrice + ' ' - (BasicPrice *( 20 / 100)));
    console.log ('Final price',FinalPrice);
}

// if user is more than 65yo: discount of 40%
else if( age > 65 ) {
    FinalPrice= (BasicPrice + ' ' - (BasicPrice *( 40 / 100)));
    console.log ('Final price',FinalPrice);
}

// no discounts
else {
    FinalPrice= (BasicPrice * 1);
    console.log ('Final price',FinalPrice);
}

// To show the final price in html 

document.getElementById('final-price').innerHTML= `Il prezzo del tuo biglietto è di £ ${FinalPrice.toFixed(2)}`;