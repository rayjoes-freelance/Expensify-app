/*const person = {
    name: 'Georges',
    age : 20,
    location : {
        city: Paris,
        temp: 21
    }
};

const {name, age} = person;

console.log(`${name} is ${age}.`);
*/

const book ={
    title : 'Ego is the enemey',
    author : 'Ryan Holiday',
    publisher : {
        name : 'Penguin'
    }
};

const {name: publisherName= 'Self-Published' } = book.publisher;

const items = ['Coffe (hot)', '$2.00', '$2.5', '$2.75'];
const [coffe,, mediumPrice] = items;

console.log(`A medium ${coffe} cost ${mediumPrice}`);