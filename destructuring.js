/*
const fish = {
    id: 57,
    name: 'king Hilsh',
    price: 8899,
    phone: '01777777000',
    address: 'Chandpur',
    dress: 'silver'
};

const { price, name, dress, phone } = fish
console.log(price, name, phone);
*/

// Object destruring 

const company = {
    name: 'akij',
    ceo: 'akbor khan',
    product: { poductName: 'akij-bord', thiknace: '16mm', price: 1900 },
    sales: 6000000,
};
const { name, ceo, sales } = company;
const { poductName, thiknace, price } = company.product;
console.log(price);
console.log(name, ceo);


//array destruring
const [a, b] = [8, 9, 545, 5];
console.log(a, b);

// chaining objsect destruing

const fish = {
    id: 57,
    name: 'king Hilsh',
    price: 8899,
    phone: '01777777000',
    address: { location: 'Chandpur', aray: 'seaput', map: 29.69 },
    dress: 'silver'
};
console.log(fish?.addre?.place);
console.log(fish?.address?.location);