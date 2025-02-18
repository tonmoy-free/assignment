// numbers =[1,2,3,3,4,4,5,6,7,8,9,10];
// element = [0];
// make a element array with even numbers, create a for loop in javascript

let numbers =[1,2,3,3,4,4,5,6,7,8,9,10];

element = []
for (let i = 0; i < numbers.length; i++) {
    numbers[i];
    if(numbers[i]%2 === 0){
        element.push(numbers[i]);
        // console.log(element);     
    }      
}
console.log(element);     
