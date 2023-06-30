//
console.log('Question 1');
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a) Programmatically subtract the value of the first element in the array from the value in the last element of the array.
  //Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
//b) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//c) Use a loop to iterate through the array and calculate the average age

//ENTER CODE for part A HERE:
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let last = ages[ages.length -1]; //this is the last index of the array
let first = ages[ages.length - ages.length]; //this is the first index of the array
let diff = last - first; //calculating the difference 
console.log(`Difference between the first and last element is: ${diff}`);

//ENTER CODE for part B HERE:
ages.push(20); //pushing a new age to the array
console.log(`Difference between first and last element is: ${diff}`);

//ENTER CODE for part C HERE:
//let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(20); //pushing a new age to the array
let sum = 0, avg = 0.0; 
for (var i = 0; i < ages.length; i++) { //running a loop from 0 to the length of the array
    sum = sum + ages[i]; //adding each age to the sum
}
avg = sum / ages.length; //calculating the average
//printing the average to the console
console.log(`The average of elements is: ${avg}`);


console.log('Question 2');
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a)Use a loop to iterate through the array and calculate the average number of letters per name.
// b)Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//ENTER CODE HERE:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//calculating average letters per name in the names array
sum = 0;
for(i = 0; i < names.length; i++) //running a loop
   {
    sum += names[i].length; 
   }
average = sum / names.length; 
console.log('The Average number of letters per name in names =' + average );
//concatenating names
let allNames = " ";
for(i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}
console.log(allNames);

console.log('Question 3');
//How do you access the last element of any array?
console.log('Use array[arr.length] to access the last element of an array');

console.log('Question 4');
//How do you access the first element of any array?
console.log('You use array[0] to access the first element of an array');


console.log('QUESTION 5');
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
////For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
//ENTER CODE HERE:
let namesArray = ["Micah","Jessica","Kenny"]; //defining the namesArray
let nameLengths = []; //creating an empty namesLength array
{
    //looping over the namesArray array and inserting the length of each string in namesArray to nameLengths
    for(let i =0; i < namesArray.length; i++) 
     nameLengths.push(namesArray [i].length); //use the length property to get the number of characters in the string of namesArray
}
//display the namesArray and nameLengths
console.log('namesArray: ' , namesArray);
console.log('nameLengths: ' ,nameLengths);

console.log('Question 6');
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
sum = 0; 
for(let i = 0; i < nameLengths.length; i++)
{
    sum += nameLengths[i]; 
}
console.log('The sum of all the lengths in nameLengths = ' + sum);

console.log('Question 7');
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
//creating a function names func and passing word n as parameters
func = (word, n) => {
    let concat = ""
    while (n != 0){
        //the number of times loop will be executed the word will be added to concat
        concat += word
        n -- //decrementing n
    }
    return concat
}
//calling the function func and passing "Hello" and 3 as arguments
console.log(func('Hello' , 3)); //printing the result in console


console.log('Question 8');
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName ,  lastName) {
    
    return firstName + lastName

   }
//printing the full name using a function call
console.log(fullName("Tom" , "Jones")); 


console.log('Question 9');
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isTotalGreaterThan100(array) {
   let count = 0; //initial none of elements greater than 100 is 0
     //this is looping through the array from index 0 to arr_len using a for loop
    for(let i = 0; i < array.length; i++) {
     if(array[i] > 100) {//if element is greater than 100
     count = count + 1;
    }//incrementing the count
    }
    return count;
    }
    console.log(isTotalGreaterThan100([22, 67, 125, 345, 12]));
    


console.log('Question 10');
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
//returning the average of array elements
function total(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]; 
    }
    let avg = total / arr.length; 
    return avg;
}
let av = total([1, 2, 3, 4, 5, 6]);
console.log(av); 

console.log('Question 11');
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isGreater(arr1, arr2) {
    let total1 = 0;
    for(let i = 0; i < arr1.length; i++) {
        total1 += arr1[i]; 
    }
    let total2 = 0;
    for(let i = 0; i < arr2.length; i++) {
        total2 += arr2[i]; 
    }
    let avg1 = total1 / arr1.length; 
    let avg2 = total2 / arr2.length; 
    if (avg1 > avg2) {
        return true; 
    }
    else {
        return false; 
    }
}
let a = isGreater ([6, 7, 8, 9, 10] , [1, 2, 3, 4, 5]);
console.log(a);

console.log('Question 12');
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//this function will return true if it is hotoutside and moneyinpocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true; 
    }
    else {
        return false; 
    }
}
let b = willBuyDrink(true, 12);
console.log(b);

console.log('Question 13');
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
let circleRadius = parseInt(prompt('Please enter the radius of the circle:')); 
let circumfrenfeOfCircle = 2 * Math.PI * circleRadius; 
//created this because I am not good with math and wanted something with a prompt to enter information
console.log('Circumfrence of circle is: ' + circumfrenfeOfCircle); 

