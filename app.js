// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter.

// var value = prompt("Enter a value: ")

// if(value === "A"){
//     alert("It is an uppercase letter")
// }

// else if(value === "a"){
//     alert("It is lowercase letter")
// }

// else{
//     alert("It is a number")
// }



// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let integer1 = prompt("Write the first integer: ")

// let integer2 = prompt("Write the second integer: ")

// if (integer1 > integer2 || integer2 > integer1){
//     alert("One of the two integers is larger than the other")
// }

// else{
//     alert("Both integers are equal")
// }


// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = prompt("Enter your password:");

// if(password === "123456"){
//     alert("Correct!")
// }
// else if(password === ""){
//     alert("Please enter your password!")
// }
// else{
//     alert("Incorrect password!")
// }


// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var number = Number(prompt("Enter the number:"))

// if(number > 0 ){
//     alert("Number is positive.")
// }

// else if(number === 0 ){
//     alert("Number has zero value.")
// }

// else{
//     alert("Number is negative")
// }

// function greetuser(greeting){
//     alert(greeting)
// }

// greetuser("Hello")


                        // FUNCTIONS ASSIGNMENT

// Q1: Write a function that displays current date & time in your browser.

// function showDateAndTime(day, month, date){
//     return day + " " + month + " " + date
// }

// document.write(showDateAndTime("Sunday", "Feb", "19 02 2023"))


// Q2: Write a function that takes first & last name and then it greets the user using his full name.

// var fname = prompt("Enter your first name:")
// var lname = prompt("Enter your last name:")

// function greetUser(){
//     return "Hello!, " + fname + " " + lname
// }

// alert(greetUser())



// Q3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var num1 = +prompt("Enter the first number:")
// var num2 = +prompt("Enter the second number:")

// function addingNumbers(){
//     return num1 + num2
// }

// console.log(addingNumbers())

// Q4: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculation(num1, num2){
//     return num1 % num2 
//     
// }

// console.log(calculation(10, 13)

// Q5: Write a function that squares its argument.

// function valueThatNeededToBeSquared(x){
//     return x * x
// }

// console.log(valueThatNeededToBeSquared(2))



// Q5: Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// ⦁	Arguments as values
// ⦁	Arguments as variables

// function areaOfReactangle(width, height){
//     return width * height
// }

// alert(areaOfReactangle(10, 20))
// alert(areaOfReactangle(20, 30))

// var width = 30
// var height = 10

// alert(areaOfReactangle(width, height))


// Q6: Forgot how old you are? Calculate it!
// ⦁	Write a function named calculateAge that:
// ⦁	takes 2 arguments: birth year, current year.
// ⦁	calculates the 2 possible ages based on those years.
// ⦁	outputs the result to the screen like so: "You are either NN or NN"
// ⦁	Call the function three times with different sets of values.

// function calculateAge(currentyear, birthyear){
//     return currentyear - birthyear
// }

// alert(calculateAge(2023, 2003))
// alert(calculateAge(2018, 2007))
// alert(calculateAge(2023, 1947))

// Q7: Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// ⦁	Pass the radius to the function.
// ⦁	Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// ⦁	Pass the radius to the function.
// ⦁	Calculate the area based on the radius, and output "The area is NN".

// function calcCircumference(radius, pi){
//     const circumference = 2 * pi * radius 
//     return `The circumference of a circle is ${circumference}`
// }

// console.log(calcCircumference(10, 3.14))

// function calcArea(radius, pi){
//     const area = pi * (radius * radius)
//     return `The area of a circle is ${area}`
// }

// document.write(calcArea(10, 3.14))

// Q8: It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// ⦁	Store a celsius temperature into a variable.
// ⦁	Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// ⦁	Now store a fahrenheit temperature into a variable.
// ⦁	Convert it to celsius and output "NN°F is NN°C."


// function celsiusToFahrenheit(celsius){
//     var fahrenheit = (celsius * 9/5) + 32
//     return `${celsius}°C is ${fahrenheit}°F`
// }

// document.write(celsiusToFahrenheit(5))

// function fahrenheitToCelsius(fahrenheit){
//     var celsius = (fahrenheit - 32) * 5/9
//     return `${fahrenheit}°C is ${celsius}°F`
// }

// document.write(fahrenheitToCelsius(5)

// -ARRAYS

// Q1: Declare an empty array using JS literal notation to store
// student names in future.

// var studentsName = []
// console.log(studentsName)

// Q2: Declare an empty array using JS object notation to store
// student names in future.

// let studentNames = []

// console.log(studentNames)

// studentNames[0] = 'John';
// studentNames[1] = 'Sarah';

// console.log(studentNames)

//Q3: Declare and initialize a strings array.

// var itemsInStock = ["Graphics Card", "PSUs", "Mouse", "Keyboards", "Processors"]
// console.log(itemsInStock.includes("Graphics Card"));

// Q4: Declare and initialize a numbers array.

// var numbers = [1, 2, 3, 4, 5 + 5]
// console.log(numbers.length)

// Q7: Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD).

// var z = "<br>";

// let qualifications = ["SSC", "HSSC", "MBBS", "BS", "BCOM", "MS", "BCS", "BCOM", "M.Phil", "PhD"]
// console.log(`The total indexes of an array are ${qualifications.length}`)

// document.write(qualifications[0])
// document.write(z) 
// document.write(qualifications[1])
// document.write(z)
// document.write(qualifications[2])
// document.write(z)
// document.write(qualifications[3])
// document.write(z)
// document.write(qualifications[4])
// document.write(z)
// document.write(qualifications[5])
// document.write(z)
// document.write(qualifications[6])
// document.write(z)
// document.write(qualifications[7])
// document.write(z)
// document.write(qualifications[8])
// document.write(z)
// document.write(qualifications[9])

// var pets = [];

// document.write(pets[0] = "dog");
// document.write(pets[1] = "cat");
// document.write(pets[2] = "bird");


// Q8: Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student.

// let studentsName = ["Soban", "Ahmed", "Saad"]
// let studentsMarks = [399, 469, 425]
// let percentages = [studentsMarks[0] * 100/500, studentsMarks[1] * 100/500, studentsMarks[2] * 100/500]

// document.write(`Marks of ${studentsName[0]} are ${studentsMarks[0]}. Percentage is : ${percentages[0]}`)
// document.write(z)
// document.write(`Marks of ${studentsName[1]} are ${studentsMarks[1]}. Percentage is : ${percentages[1]}`)
// document.write(z)
// document.write(`Marks of ${studentsName[2]} are ${studentsMarks[2]}. Percentage is : ${percentages[2]}`)


// Q9: Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// let colors = ["Red", "Green" ,"Blue" ,"Violet" ,"Indigo" ,"Maroon"]
// console.log(colors)

// let colorAtFirst = prompt("Which color do you want at the beginning?")

// console.log(colors.unshift(colorAtFirst))

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let colorToAddAtEnd = prompt("Which color do you want to add at the the end?")

// console.log(colors.push(colorToAddAtEnd))

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// console.log(colors.unshift("Yellow", "Grey"))

// d. Delete the first color in the array. Display the updated
// array in your browser.

// console.log(colors.shift())
// console.log(colors.splice(0, 0, "Purple"))

// e. Delete the last color in the array. Display the updated
// array in your browser.

// console.log(colors.pop())
// console.log(colors.slice(1, 2))

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var colorToAdd = prompt("Which color do you want to add?")
// var indexNum = +prompt("At which index number?")

// console.log(colors.splice(indexNum, 0, colorToAdd))


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var indexNum = +prompt("At which index number do you want to remove colors?")
// var numberOfColorsToBeRemoved = +prompt("How many colors do you want to remove?")

// console.log(colors.splice(indexNum, numberOfColorsToBeRemoved))

// Q11: Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi", "Faisalabad", "Islamabad", "Hyderabad", "Lahore"]
// console.log(cities)

// var selectedCities = cities.slice(0, 2)
// console.log(selectedCities)

// Q12: Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var myPC = ["This", "is", "my", "PC"]

// console.log(myPC.join(" "))

// Q15: Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var mblProducts = ["Samsung", "Apple", "Motorola", "Nokia", "Vivo"]

// document.write(<select>
//                 <option>(mblProducts)</option>
//                 <select/>)

// Q11: Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentsScore = [350, 150, 550, 325]

// console.log(studentsScore.sort())

                            //-ARRAYS & LOOPS
          
// Q1: Declare and initialize an empty multidimensional array.
// (Array of arrays) &&
// Q3: Write a program to print numeric counting from 1 to 10.


// var arr = []

// for (let a = 1; a < 10; a++){
//     console.log(arr + a)
// }

// Q2: Declare and initialize a multidimensional array
// representing the following matrix:

// var arr1 = [0, 1, 2, 3]
// var arr2 = [1, 0, 1, 2]
// var arr3 = [2, 1, 0, 1]

// for(a = 0; a <= arr1.length - 1; a++){
//     console.log(arr1[a])
// }
// for(let a = 0; a <= arr2.length - 1; a++){
//     console.log(arr1[a])
// }
// for(let a = 0; a <= arr3.length - 1; a++){
//     console.log(arr1[a])
// }

// Q4: Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNum = +prompt("Which number you want the table of?")
// var tableLength = +prompt("Enter the length of table?")

// for(let a = 1; a <= tableLength ; a++){
//         console.log(tableNum * a)
// }

// var bakeryItems = ["pastry", "bread", "jam", "colddrinks", "cake", "jelly", "juices"]

// for (let a = 0; a < bakeryItems.length; a++) {
//         console.log(bakeryItems[a])
// }

// Q5: Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]

// for(let a = 0; a < fruits.length; a++){
//         console.log(`Yes ${fruits[a]} is available at index number ${a}`)
// }

// Q7: You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// var products = ["Processors", "Motherboards", "Graphic Cards", "RAMS", "SSD", "HDD"]
// var askUser = prompt("Hey there! What do you want to buy?")

// var signal;
// var indexNumber;


// for(let a = 0; a < products.length; a++){
//     if(products[a] === askUser){
//         signal = true
//         indexNumber = a
//     }
// }

// if(signal){
//     console.log(`Yes ${askUser} are available at index number ${indexNumber}`)
// }
// else{
//     console.log("Sorry " + askUser + " are currently not available in our store.")
//     }

// Q8: Write a program to identify the largest number in the
// given array.

// const A = [24, 53, 78, 91, 12];

// let smallest = A[0];

// for(let i = 1; i < A.length; i++) {
//   if(A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// console.log(smallest)

// console.log("The smallest number in the array is: " + smallest);

// Q6: Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a):
// let counting;

// for(let a = 0; a < 15; a++){
//     counting += a + ","
// }

// document.write("Counting is: " + counting)

// b):

// let reverseCounting;

// for(let a = 10; a >= 1; a--){
//     reverseCounting += a + ","
// }

// console.log("Reverse counting is: " + reverseCounting)

// c):

// let evenNumbers = " ";

// for(let a = 0; a <= 10; a++){
//     evenNumbers += 2 * a + ","
// }

// console.log("Even numbers are: " + evenNumbers)

// // d):

// let oddNumbers = " ";

// for(let a = 1; a <= 19; a+=2){
//     oddNumbers += a + ", "
// }

// console.log("Odd numbers are: " + oddNumbers)

// e):

// let series = " ";

// for(let a = 0; a <= 10; a++){
//     evenNumbers += 2 * a + "k, "
// }

// console.log("Series: " + series)