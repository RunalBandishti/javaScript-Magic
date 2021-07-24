const hobbies = ["Sports","Cricket"];
hobbies.push("Reading");
hobbies.unshift("Coding");//this will be added at the first index
hobbies.pop();//will remove the last element
hobbies.shift();//will shift elements from left to right while removing coding
console.log(hobbies);


hobbies[1] = 'Swimming';//will override coding
hobbies[5] = 'Coding';//targeting an element that is not in the index will create empty slots


hobbies.splice(0,0,'Food');
//here i said to start from 0th index then 
//i asked it to delete 0 elements and then i said to it add Food at 0th position
//if i provide negative index it will go back and start from last element

//**************************************************************************************************************************************************************************
const results = [1,2.5,2,4,-5,10,6];
console.log(results.slice());
//it returns a brand new array

const result = storedResults.concat([23,42,54]);
//it will add the provided array to the old arrayListItems

console.log(results.indexOf(2.5));
//it will return the index of first matching value

console.log(results.lastIndexOf(2.5));
//it will search from last index

console.log(results.includes(2.5));
//this will just result true or false

//**************************************************************************************************************************************************************************
const personData = [{name: 'John'},{name: 'Mannuel'}];
console.log(personData.indexOf({name: 'John'})); 
//indexOf won't work on objects as objects are not all the same

const manuel = personData.find((person,index,persons)=>{
    return person.name === 'Mannuel';
});
console.log(manuel);
//it will return the matching reference
//findIndex() can also be use to find the index in such scenarios


//**************************************************************************************************************************************************************************
const prices = [10.99,5.99,3.99,6.59];
const tax =0.19;
const adjustedPrices = [];

// for (const price of prices) {
//     adjustedPrices.push((price) * (1 + tax));
// }

prices.forEach((price,idx,prices) => {
    //prices variable is not a array which is assigned to the forEach method
    const priceObject = {index:idx,adjPrice:price * (1 + tax)};
    adjustedPrices.push(priceObject);
});
console.log(adjustedPrices);
//will return array of objects with index and value

//**************************************************************************************************************************************************************************


const prices = [10.99,5.99,3.99,6.59];
const tax =0.19;

const adjusterPrices = prices.map((price,idx,prices) => {
    //prices variable is not a array which is assigned to the forEach method
    const priceObject = {index:idx,adjPrice:price * (1 + tax)};
    return priceObject;
});
console.log(prices,adjustedPrices);
//will return a possibly transformed element for an element

//**************************************************************************************************************************************************************************

const sortedPrices = prices.sort((a,b)=>{//by default converts it to string and then it sorts
    if(a>b){
        return 1;
    }
    else if(a === b){
        return 0;
    }else{
        return -1;
    }
});
console.log(sortedPrices.reverse());
//it outputs the reversed array 

//**************************************************************************************************************************************************************************

const filteredArray = prices.filter((price,idx,prices)=>{
    return price >6;
    //here any item greater than 6 will be kept and other will be removed and it will return that modified array
});
console.log(filteredArray);

//**************************************************************************************************************************************************************************

const sum = prices.reduce((prevValue,curValue,curIndex,prices)=>{
    return prevValue + curValue;
},0);//prevValue =0 + curValue = first element from array and futher

//**************************************************************************************************************************************************************************

const data = 'new york; 10.99;2000';

const transformedData = data.split(';');
//this will now split elements after the (;) and return an array

//**************************************************************************************************************************************************************************

const nameFrag = ['Max','Sage'];
const namess = nameFrag.join(' ');
console.log(namess);
//by default it seperates by comma(,)

//**************************************************************************************************************************************************************************

const copiedName = [...nameFrag];
//here it is a spread operator not the rest operator
//it gives new array 
//the changes added to the original array will not be reflected to copied one
//only if the indexed changes are made then only it will reflect on copied one

console.log(Math.min(...prices));

//**************************************************************************************************************************************************************************

const nameData = ['Max','Sage','Mr',30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName,...other] = nameData;
//Destructuring
//it will store the 1st element and 2nd element in the provided array elements after that are merged into an array 

//**************************************************************************************************************************************************************************



