//Sets are data structures which help you manage unique values
//Example to keep track of id's

const ids = new Set();//empty set

const ids = new Set([1,2,3]);
//we cannot access elements from sets by index
//in a set the values are to be unique 
console.log(ids.has(1));//this will return true or false
ids.add(1);
ids.delete(1);

for (const entry of ids.entries()) {
    console.log(entry);
}

let person = {name: 'Max'};
const persons = new WeakSet();

persons.add(person);
console.log(person);
//weakset allows garbageCollector to delete the set and the variable/data when it is not in use


//*****************************************************************************************************
//Maps construtor can be initialized 
//with array of array because each array in that array is a key value pair

const person1 = {name: 'John'};
const person2 = {name: 'Joe'};

const personData = new Map([[person1, [{date: 'yesterday',price: 10}]]]);
console.log(personData); //will return a map,which is key value pair

personData.set(person2,[{date: 'day before yesterday',price:20}]);//adding to map

console.log(personData.get(person1)); //will return same as above  

for (const [key,value] of personData.entries(){
    console.log(key,value);
    //We here log an array where the first element is key and the second element is a value
}

for (const key of personData.keys()){
    console.log(key);
    //if you only need the keys then you can do this
}


for (const key of personData.values()){
    console.log(key);
    //if you only need the values then you can do this
}

const personData = new WeakMap();
personData.set(person,'Extra info!');
console.log(personData); 
//Same as Weakset which both are great for memeory management
