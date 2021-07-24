const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5, 2); //this uses constructor function
console.log(moreNumbers);
//If u pass single number in that function it will consider it as the length of the array

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const fromArra = Array.from('Hi!'); 
// will get output like ["H","i","!"];

const listItems = document.querySelectorAll('li');
console.log(listItems);//this will return nodelist which array like object

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);
