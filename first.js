// welcom to javaScript

// java script is a programing language we will use it to give instructions to the computer.

// data types in javaScript                1.primitive 7           2. non-primitive

// data types in javaScript primitive--->     Number, string, boolean, undefined, null, BigInt, Symbol

// number example

// let a = 5;
// console.log(a);

// string example

// let fullName = `usmanghani`
// console.log( fullName);

// boolean example

// let isFollow = true;
// console.log(isFollow);

// undefined example

// let name;
// console.log(name);

// null example                 paused

// bigInt example                       bigint is wrong                 BigInt is correct

// let x = BigInt(`123`);
// console.log(x);

// Symbol example                       S capital use hoga  small s will be an error

// let y = Symbol(`hy_usman`)
// console.log(y);

//  types of non-primitive data in javaSript               (objects----->    arrays,function)

// Object                      collection of values             the values in object is called key value

// object example               we use const for object but we can also use let

// const student = {
//         name    : `usmanghani`,
//         Age     :33,
//         class   :`learning`,
//         isPass  :true,
// }

//how to access a single key from object        there are two method given below

// key access example no 1

// const student = {
//         name    : `usmanghani`,
//         Age     :    33,
//         class   :    `learning`,
//         isPass  :    true,
// }

// console.log(student[`name`]);

// key access example no 2

// const student = {
//         name    : `usmanghani`,
//         Age     :33,
//         class   :`learning`,
//         isPass  :true,
// }

// console.log(student.name);

// According to my mind number 2 example is easy rather than 1 what you say!

// how to change the value of any object key for example how to change name and age

// const variable ko change nh kr sakty lakin const object ki key ko change kr sakty hain

// const student = {
//         name    : `usmanghani`,
//         age     :33,
//         class   :`learning`,
//         isPass  :true,
// }

// student.name= `ghaniusman`,

// console.log(student.name);

// student.age= 45

// console.log(student.age);

// let                  we can update

// const                we can't update

// const object         we can update the key of object

// operatores in javaScrip=================================================================================

//Artimetic Operators                           used with 2 operands a & b

// (+ - * /)

// let a = 5;

// let b = 2;

// console.log("a=",a,"b =",b);

// console.log("a+b=",a+b);

// console.log("a-b=",a-b);

// console.log("a*b=",a*b);

// console.log("a/b=",a/b);

// console.log("a%b=",a%b);     Modulus (remainder value)

// console.log("a**b=",a**b);   Exponentiation (power value)

// =========================================================================================================

//unary operators               unary operators used with 1 operand      with a      with b     with c

// increment symbol ++ and decrement --         a+1 = a++       a-1 = a--

// let a = 5;
// a++ ;

// let b = 2;

// b-- ;

// a-- ;
//         these both syntax are equal up and down
// a = a - 1;

// a++ ;
// these both syntax are equal up and down
// a = a + 1;

// console.log("a=",a,"b =",b);

// ==========================================================================================================

//Asignment operators       (means to assign values to the variables)  work with 2 operands

// let a = 4;

// a *= 4;

// console.log("a += ",a );     a += 4          a = a + 4

// console.log("a -= ",a);      a -= 4          a = a - 4

// console.log("a *= ",a);      a *= 4          a = a * 4

// console.log("a /= ",a);      a /= 4          a = a / 4

// console.log("a %= ",a);      a %= 4          a = a % 4

// console.log("a **= ",a);     a**= 4          a = a **4

// ==========================================================================================================

// comparison operators                 always give the result in boolean value

// ==   is equal to
// !=   is not equal to
// ===  is equal to & type
// !==  is not equal to & type

// ===========================================================================================================

// Logical operators

// logical AND     &&   must be both values will be true. ans true

// logical or      ||   from two values one must be true. ans true

// logical not     !    reverse answer           true will be false and vice versa.

// let a = 5;

// let b = 2;

// let cond1 = a < b;

// let cond2 = a > b;

// let cond3 = a === 5;

// let cond4 = a !== 5;

// console.log( cond1 && cond2);

// console.log(cond1 || cond2);

// console.log(cond3 || cond4);

// console.log(!a < b );

// console.log(!a > b );

// ========================================================================================================

// conditional statement        to implement some condition in the code

// Types of statements ( if ,  if-else  , else=if )

// let age = 18;

// if (age >= 18){
//     console.log("you can vote")
// };

// if (age < 18){
//     console.log("you CANNOT vote")
// };

// even and odd

// let num = 10;

// if (num % 2 === 0){

//          console.log ( num , " is even");
//}  else {
//          console.log ( num , " is odd");
//        }

// following syntax main jo (let mode = ......) ki value kisi say match nh
// kary gi to else wala syntax kam kary ga means k white show ho ga nh to
// if, else if , else, is main say select ho jay ga mode.

// let mode = "white";

// let color ;

// if (mode === "dark");{
//     color = "black";
// }else if (mode === "blue");{
//     color = "blue";
// }else if (mode === "pink");{
//     color = "pink";
// }else {
//     color = "white";
// };

// console.log(color);

// let num =  prompt("enter the number");

// if (num % 5 === 0){
//     console.log(num , "is multiple of 5")
// }else {
// console.log(num , "is not multiple of 5")
// };

// let score = prompt("Enter Num to check grade (0-100)")

// let grade ;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// }  else if (score <= 89 && score >= 70){
//     grade = "B";
// } else if (score  <= 69 && score >= 60){
//     grade = "C";
// } else if (score  <= 50 && score >= 59){
//     grade = "D";
// } else if (score  <= 0  && score >= 49){
//     grade = "F";
// }

// console.log( "According to your scores, your grade is :", grade);

// =========================================================================================================

// Ternary Operators        condition? true output: false output;      (used with 3 operands)

// if condition will be true then true output will work and if condition will be false then false outputworks.

// let age = prompt("Enter Age to Check Age")

// let result =  age >= 18 ? "adult" : "not adult";

// console.log (result);

// ==========================================================================================================

// looooooooooooooooooops   loops are used to execute the piece of code again & again.

// (jo variables hum loop main use kety hain wo sirf loop tak he rahy gay un ka loop say baher koi value hogi)

// (types of loops ---------------------------------------- )

// there are three statements/conditions in for loop in the example given below the

// (let count = 1) is the first statement               (also known as the initialize condition/statement)

// (count <= 5 ; ) is the second statement              (also known as stopping condition/statement)

// (count ++ ) this is the third statement              (aslo known as updation condition/statement)

// (for loop)  type             (jo kam for loop say ho sakta hy wo while loop say bhe ho sakta hy)

// for (let count = 1; count <= 5; count ++){
//     console.log(`mani`);
// }

// calculate sum of 1 to 5
// let sum = 0;

// for (let i = 1; i <= 5; i ++){
//         sum = i + sum ;
// }

// console.log(sum);

// calculate the sum of 1 to 100

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n ; i ++ ){
//         sum = sum + i;
// }
// console.log(`sum=`,sum)

// (infinite loop)  type

// 2. infinite loop (hint never use in real web ok!)
// example given below of infinite loop

// for(i = 1; i >= 0; i ++ ){
//         console.log(`i=`,i);
// }

// (while loop)    type (is main hum initialize while say phlay karty hain or stoping condition while main or updation bhe while loop main he kerty hain example given below.)

//  (jo kam while loop say ho sakta hy wo for loop say bhe ho sakta hy)

// this is the example of while loop.

// let i = 1;

// while (i <=5){
//         console.log(i)
//         i ++;
// }

// this is the example of for loop

// for (let i = 1; i <=5 ; i ++){
//         console.log(i)
// }

// =========================================================================================================

//( do while loop)      (one time code will execute weather stopping condition is true or false )

// do while loop main stoping condition end per hoti hy jub k while loop main start per

// example of do while loop.

// let i = 10;
// do{
//     console.log(`usman`);
//     i++;
// }while (i <= 5);

// example of while loop

// let i = 1;

// while (i <= 5 ){
//         console.log(`usman`)
//         i ++;
// }

// ==========================================================================================================

// ( for-of loop ) (if somebody wants to print each letter of string then we can use for-of loop)

// for of loop is used for string and arrays.this loop can work with the single value/index of string/arrays.

// for(let val of strVar){
//         do some work
// }

// let str = "usmanghani";
// let size = 0;

// for (let val of str){
//     console.log("val =", val);
//     size ++;
// }

// console.log(size);

// ( size "0" ki place per  jo likho gy wo or string ki length / size /character main add ho jay ga e.g. usmanghani main 10 chararcter hain or 0 ki jaga phlay he 10 likho gy to console main size 20 ayga.)

// (for-in loop)          (used for object and arrays and the key of object for loop)
//                        (for in loop hum ko object ki key print kr k deta hy )

// for (let key in objVar){
//         do some work
// }

// let student =  {
//     name: "usman",
//     age:33,
//     gpa : 7.5,
//     isPass: true,

// };

// for (let key in student){
//      console.log("key=", key, "value =", student[key]);
//        let a = `key = ${key} value = ${student[key]}`;
//         console.log(a);
// }

//

// print num from 0 to 100 (even and odd)        by using(for-loop)type

// (when !== odd num will display and when === even num display)

// for(let num= 0; num <= 100; num ++){
//     if (num % 2 !== 0){
//          console.log(num);
//     }
// };

// (question solving)           (by using prompt with while loop)
//                              (prompt say jo be return ata hy wo aik string hota hy )
//                              (is example main aik point hy or wo samjhna zarori hy )
// let gameNum = 25;

// let userNum = prompt("guess the game num :")

// while(userNum != gameNum){
//     userNum = prompt("you enter wrong number guess again");
// }
// console.log("congratulations you have enterd the right game number");

// string is a sequence of characters used to represent Text

// (the method to calculate length of string)

// let str = "usmanghanimanijani"

// console.log(str.length)

// (string ki position agr single hy to index keh sakty hain or plurel position hy to indices)

// let str = "apna college"
// console.log(str[3]);

// (template literals)
// (a way to have  embedded expressions in strings)
// (string interpolation= jo hum template literals ko use krty hoy jo expressions
//  ya placeholders add krty hain us ko kehty hn string interpolation.)

//  $ yeh variable k liy hoga.  no space between $ sign and {} these brackets ok    ${}

// let obj ={
//     item : "pen",
//     price : 10,

// };

// console.log ("the cost of item =" , obj.item , "is" , "and price of item =" , obj.price , "price")

// let outPut = `the cost of item = ${obj.item} is and price of item = ${obj.price} price`;

// console.log(outPut);

// (escape characters)  \n =    it means string main next line add krna.

// console.log ("usman\nghani");

//                      \t =    it means string main tab (space) add krna.

// console.log ("usman\tghani");

// (String method in javascript proogramming language)

// (These are built-in functions to manipulate a string)

// (note= string changed with upper and lower case method always called a new string ) (it means string is mutable---> not change able )

// 1.str.toUpperCase () (this method is used to convert string letter to upper case)

// let str = "usman ghani";
// console.log(str.toUpperCase());

// 2.str.toLowerCase()  (this method is used to convert string letter to lower case)

// let str = "USMAN GHANI";
// console.log(str.toLowerCase());

// 3.str.trim() // remove whitespaces

// let str = "                USMAN            GHANI                   ";
// console.log(str.trim());

// str.trim method will only remove space from start and from end.

// let str = "usmanghani";
// str.toUpperCase();
// console.log(str);

// the result of above code will be in lower case why?
//  besause when we console the string,the original string have to appear,the str.toUppercase method will generate the new string. Example given below

// let str      = "usmanghani";
// let newstr   =str.toUpperCase();
// console.log(str);
// console.log(newstr);

// now we are going to save new string in old string but it is absolutely wrong method.

// let str = "usmanghani";
//  str=str.toUpperCase();
// console.log(str);

// now above string have been changed but it is not a right method

// 4. str.slice(start, end) (start or end main string ki value add kairn or jo part specific chahey laylain)

// let str = "123456789";
// console.log(str.slice(4, 8));

// above string function is to select the Specific part of string

// 5. str1.concat(str2) (used to join strings) Example given below

// let name1 = "usman";
// let name2 = "ghani";

// let concat = name1+name2;   /     name1.concat(name2);        (dono main say koi aik use kr sakty hn)

// console.log(concat);

// name1.concat(name2);           name1 + name2

// the result of above example is to display in the same line by joning 2 strings.

// 6. search value and replace value of string

// let name = "usman"

// console.log(name.replace("us","no"));

// let name = "usmanghani";
// console.log(name.replaceAll("a","b"));

//  ab is string main jitny bhe character hon gay sab replace ho jaien gy a ki place per b print ho ga.

// 7. str.charAt(idx)                   (to use to find the character in string)
//                          (matlab index ko agr findout krna pary to ap single index find kr sakty hain)

// space bhe count ho gai jasy u k bad hy space to is main index kuch asy ho ga u=0, =1,s=2....... and so on

// let name = "u sman"

// console.log(name.charAt(2) );

// question solving

// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg:  username = "usmanghani", user should be "@usmanghani10"

// let fullName= prompt("Enter The Full Name");

// let userName= "@"+fullName+fullName.length;

// console.log(userName);

// (arrays in js------>collections of items with same type or same variable e.g below)(arrays are mutable)

// arrays    (arrays main position / index metter krti hy or is ka result linear main matlab aik line main show hota hy or arrays us waqat use krty hn jub aik ki type ka data ho or us ko store krna ho jasy marks of one entir class etc.)

// this is the example of arrays

// let students = ['usman','ghani','mani','mano','musfirah','abeerah','fatimah'];
// let marks = [55,66,77,88,99,44,33,22,11];

// loop work with iterable like = string ,object ,arrays        (iterator means loop)

// looping over an Array  print all elements of array

// we are attempting the loop with these hearos with for loop method

// let heroes = [`antman,`,`spiderman`,`hulk` ,`stark`,`tomcriuse`,`ajay`,`amirkhan`,`salmankhan`]
// for(let idx= 0; idx <heroes.length; idx++){
//         console.log(heroes[idx]);
// }

// we are attempting the loop with these hearos with for-of loop method

// let heroes = [`antman,`,`spiderman`,`hulk` ,`stark`,`tomcruse`,`ajay`,`amirkhan`,`salmankhan`]

// for(let hero of heroes){
//         console.log(hero);
// }

// question to solve

// lets Practice

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60]

// let sum = 0;

// for (let val of marks){
// sum = sum + val;
// }

// let avg = sum / marks.length;

// console.log(`the average of marks is = ${avg}`);

// the method to change index of arrays.

// let marks = [44,55,66,445,335,33,553,224,];
// marks [3]= 77;

// // lets Practice                with for of loop

// // Qs. For a given array with prices of 5 items [250, 645, 300, 900, 50]
// // All items have as offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250 , 645, 300, 900, 50];

// let i = 0;

// for(let val of items){

//         console.log(val);

//         i = i + val;

//         let offer = val/10;

//         let off = console.log(offer);

//         val = val - offer;

//         console.log(`newArr = ${val}`);
// };

// now i am solving the question by using for loop

//  let items = [250 , 645, 300, 900, 50];

// for(let i = 0; i < items.length; i ++){
//         let offer       = items[i] / 10;
//         items[i]       -= offer;

// };

// console.log(items);

// ========================================================================================================
// Arrya Methods

// 1.   Push()          method is used to add index to the end of Array.
// 2.   unshift()       method is used to add index to the start.
// 3.   Pop()           method is used to delete from end and return result.
// 4.   shift()         method is used to delete from start and return result.
// 5.   toString()      method is used to convert array to string.
// 6.   concat()        method is used to joins multiple arrays and return result.
// 7.   slice()         method is used to return a piece of array.      (startidx, endidx)
// 8.   splice()        method is used to change original array (add, remove, replace)

// example of push()  (now we are going to push `apple` in fooditems in the above Array)

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// foodItems.push(`apple`);
// console.log(foodItems);

// example of unshift() (we are adding ali to the start of below array)

// let name = [`usman`,`ghani`,`mani`,`mano`, `fatima`];

// name.unshift(`ali`);
// console.log(name);

// example of pop ()    (we are going to delete form end of this array `tomato`)

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// foodItems.pop();
// console.log(foodItems);

// example of shift() (used to delete from start and return result)

// let name = [`usman`,`ghani`,`mani`,`mano`, `fatima`];

// name.shift();
// console.log(name);

// example of toString()        original array main change nh krta balky aik naya string print krta hy.

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// console.log(foodItems.toString());

// console.log(foodItems);

// example of concat()      method is used to joins multiple arrays and return result.

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// let name = [`usman`,`ghani`,`mani`,`mano`, `fatima`];

// let concat = foodItems.concat(name);

// console.log(concat);

// example of slice()         method is used to return a piece of array.      (startidx, endidx)

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// let slice = foodItems.slice(1, 3);

// console.log(slice);

// example of splice()          method is used to change original array (add, remove, replace)
//                              (we add radish at the place of carrot)

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// foodItems.splice(1,1,`radish`);

// console.log(foodItems);

// example of splice()          method is used to change original array (add, remove, replace)
//                              (we remove califolower)

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// foodItems.splice(2,1,);

// console.log(foodItems);

// example of splice()          method is used to change original array (add, remove, replace)
//                              (we will remove greenchilli and replace it with peas )

// let foodItems = [`potato`, `carrot`, `califolower`, `greenchilli`, `pumkin`, `tomato`];

// foodItems.splice(3,1, `peas`);

// console.log(foodItems);

// (functions)  (Block of code that performs a specific task, can be invoked whenever we needed.)

// function maniBhi(){
//         console.log(`mara name`);
//         console.log(`ghani bhi`);
// }
// maniBhi();

// function first_Function(msg ,n){
//         console.log(msg ,n);
// }

// first_Function(`how are you everyone`,100);

// function sum(x, y){
//         s = x + y;
//         return s;

// }

// let val = sum(3,4);
// console.log(val);

// Arrow function is a compact method of function ===================================================
// arrow function of variable main assign krna. arrow function is a part of modern part of java script.

// const arrowSum = (a,b) => {

//         console.log(a + b);
// };
// arrowSum(5 ,5);

// multiplication arrow fun

// const multi = (x , y) => {

//         console.log(x * y);

// }

// multi( 5 , 5);

// const multi = (x , y) => {

//        let s =  x * y;
//         return s;

// }

// let result = multi (5,5);
// console.log(result);

// i am making a function that shows the vowels words in the string. lets start
// itna code to hum ko function call per jo string write karien gy wo print kry ga.below code

// function countVowels (string){
//         for (let str of string)
//                 console.log(str);
// };

// this function is make for to calculate vowels words in the string.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === `a` ||
//       char === `e` ||
//       char === `i` ||
//       char === `o` ||
//       char === `u`
//          )
//     {
//       count++;
//     }
//   }
//   console.log(count);
// }

// now uper wala code arrow function say karine gay coding rat ko 2 bjy 05/03/2026

// ab jo below code hy wo arrow function say bana hy

//  let countVowels = (str) => {
//         let count = 0;
//   for (const char of str) {
//     if (
//       char === `a` ||
//       char === `e` ||
//       char === `i` ||
//       char === `o` ||
//       char === `u`
//          )
//     {
//       count++;
//     }
//   }
//     return count;
// }

// let abc = countVowels(`i am usman ghani and learning js and inshallah i will done it perfectly`);
// console.log(abc);

// forEach loop in Arry (this will be only use for arry, not for a string.)
// arr.forEach (callBackFunction)
// CallbackFunction : Here, it is a function to execute for each element in the arry
// A callback is a function passed as an argument to another function

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function myArr(val) {
//   console.log(val);
// });


// arr.forEach((val) =>{
//     console.log(val)
// })


// below is the example of forEach loop, he will not work with string only with arry understan!.


// let str = "usmanmani"

// str.forEach((val){
//     console.log(val)
// })

// another example of arr, we are going to change arr with upperCase. example with function

// let arr = [`lahore`, `gujranwala`, `karachi`, `islamabad`, `hafizabad`]

// arr.forEach(function myCity(val){
//     console.log(val.toUpperCase())
// })

// another example of arr, we are going to change arr with upperCase. example with arrow function

// let arr = [`lahore`,`pakistan`,`karachi`,`hafizabad`]

// arr.forEach((val)=>{
//     console.log(val.toUpperCase())
// })

// Higher order function / method      what is this? (call back function is a higher order function)

// kisi dosray function ko paramater lay laty hain ya kisi function ko return krty hain.

// higher order function / method are methods that either take another function as a paramater inside them or they  return the another function as there output.


// question for solving

// For a given arry of numbers, print the square of each value by using forEach loop.


// let arr = [1,2,3,4,5,]

// arr.forEach(function mySquare(val){
//     console.log(val*val);
//     console.log(val **2)
// })

// now with arrow function

// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val * val)
//     console.log(val **2)
// })



// let arr = [1,2,3,4,5]
//  let mani = (val) =>{
//     console.log(val ** 2);
//  }
// arr.forEach(mani)


