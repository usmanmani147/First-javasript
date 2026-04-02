// welcome to javaScript

// java script is a programing language we will use it to give instructions to the computer.

// data types in javaScript                1.primitive 7           2. non-primitive

// data types in javaScript primitive--->     Number, string, boolean, undefined, null, BigInt, Symbol

// ==================================================================================================

// number example

// let a = 5;
// console.log(a);

// ==================================================================================================

// string example

// let fullName = `usmanghani`
// console.log( fullName);
// ==================================================================================================
// boolean example

// let isFollow = true;
// console.log(isFollow);

// ==================================================================================================

// undefined example

// let name;
// console.log(name);

// ==================================================================================================

// null example                 null means empty object

// ==================================================================================================

// BigInt example     (shows (n) with BigInt value)       bigint is wrong         BigInt is correct

// let x = BigInt(`123`);
// console.log(x);

// ==================================================================================================

// Symbol example                       S capital use hoga  small s will be an error

// let y = Symbol(`hy_usman`)
// console.log(y);

// ==================================================================================================

//  types of non-primitive data in javaSript               (objects, arrays, function)

// Object                      collection of values             the values in object is called key value

// object example               we use const for object but we can also use let

// const student = {
//         name    : `usmanghani`,
//         Age     :33,
//         class   :`learning`,
//         isPass  :true,
// }

// ==================================================================================================

// how to access a single key from object        there are two method given below

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

// ==================================================================================================

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

// student.age= 45;

// console.log(student.age);

// ==================================================================================================

// let                  we can update

// const                we can't update

// const object         we can update the key of object

// operatores in javaScript=================================================================================

// Artimetic Operators                           used with 2 operands a & b

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

// unary operators               unary operators used with 1 operand      with a      with b     with c

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

// Arthmetic Asignment operators       (means to assign values to the variables)  work with 2 operands

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
// >
// <
// >=
// <=
// ==   is equal to
// !=   is not equal to
// ===  is equal to & type
// !==  is not equal to & type

// | Operator | Meaning            | Checks       | Example     | Result |
// | -------- | ------------------ | ------------ | ----------- | ------ |
// | `==`     | Equal (loose)      | Value only   | `"5" == 5`  | true   |
// | `===`    | Equal (strict)     | Value + Type | `"5" === 5` | false  |
// | `!=`     | Not equal (loose)  | Value only   | `"5" != 5`  | false  |
// | `!==`    | Not equal (strict) | Value + Type | `"5" !== 5` | true   |
// | `>`      | Greater than       | Value        | `5 > 3`     | true   |
// | `<`      | Less than          | Value        | `5 < 3`     | false  |
// | `>=`     | Greater or equal   | Value        | `5 >= 5`    | true   |
// | `<=`     | Less or equal      | Value        | `3 <= 5`    | true   |

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

// Types of statements ( if , else if )

// if statement, is only use to check the statement, if statement will true is will work otherwise will not work.
// let age = 18;

// if (age >= 18){
//     console.log("you can vote")
// };

// in above example if age will be less then 18 the if statement will not work.

// let age = 18;

// if (age <= 17){
//     console.log("you CANNOT vote")
// };

// in above example is age will more then 18 the if statement will not work

// now we are making two options statement in which we show first and secod statement(we can use multiple statements with this method) as we mentioned above >18 and <17 wala.
// for this method we will use if else statement, in this statement we have more then one options for excution.

// let age = prompt(`enter the age to check vote status`);
// if (age >=18 ){
//     console.log(`you can vote`)
// }else{
//     console.log(`you cannot vote`)
// }

// in above example we use both options if the age will more the 18 then we can vote otherwise we can't vote.

// else if hamesha if ke baad aata hai, aur else se pehle.
// else optional hai, aur last mein aata hai.
// else if ko alag likhte hain, elseif ya else: if nahi (JavaScript mein)

// now in the below example we will use more then two statments by using else if method.

// const age = prompt(`enter the age `);
// if (age >=60){
//     console.log(`you can go home`)
// }else if (age >=18){
//     console.log(`go to the europe`)

// }else if (age <=17){
//     console.log(`ready for the europe`)
// }

// know we are using even and odd game

// let num = Number(prompt(`enter num to check even or odd`));
// // let num = 10;

// if (num % 2 === 0){

//          console.log ( num , " is even");
// }  else {
//          console.log ( num , " is odd");
// }

// ===============================================================================================

// Ternary Operators        condition? true output: false output;      (used with 3 operands)

// if condition will be true then true output will work and if condition will be false then false output will works.

// ===============================================================================================


// let age = prompt("Enter Age to Check Age")

// let result =  age >= 18 ? "adult" : "not adult";

// console.log (result);

// ===============================================================================================

// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is

// a multiple of 5 or not.

// let num = Number (prompt(`enter the num to check num is multiple of 5 or not`));

// let Result = num %5 ===  0 ? `multiple of 5`: `not a multiple of 5`;
// console.log(Result);

// ===============================================================================================

// let num =  prompt("enter the number");

// if (num % 5 === 0){
//     console.log(num , "is multiple of 5")
// }else {
// console.log(num , "is not multiple of 5")
// };

// ===============================================================================================


// let mode = "white";

// let color ;

// if (mode === "dark"){
//     color = "black";
// }else if (mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color = "pink";
// }else {
//     color = "white";
// }

// console.log(color);

// ===============================================================================================


// let score = Number(prompt("Enter Num to check grade (0-100)"));

// let grade ;

// if (score >= 90 && score <= 100) {
//     grade = `A`;
// }else if (score >= 70 && score <= 89){
//     grade = `B`;
// }else if (score >= 69 && score <= 88){
//     grade = `C`;
// }else if (score >= 49 && score <= 68){
//     grade = `D`;
// }else {
//     grade = `F`;
// }

// console.log( "According to your scores, your grade is :", grade);

// ==========================================================================================================

// loops  →  loops are used to execute the piece of code again & again.

// (jo variables hum loop main use kety hain wo sirf loop tak he rahy gay un ka loop say baher koi value hogi)

// (types of loops ---------------------------------------- )

// Types of loop and the condition of loop is below.every loop has it own condition.

// for loop → fixed loop (count pata ho) syntax given below

// for (let i = 1 ; i <= 5 ; i ++){
// console.log (`mani`);
// }

// ab uper wali example main hum nay mani string ko 5 bar print kerwaya hy for loop ko use kr kay.

// console.log(`mani`);
// console.log(`mani`);
// console.log(`mani`);
// console.log(`mani`);
// console.log(`mani`);

// is tarha bhe 5 bar kerwa sakty thy lakin aik small piece of code say easy ho gaya run krana.

// calculate sum of 1 to 5
// let sum = 0;

// for (let i = 1; i <= 5; i ++){
//         sum = i + sum ;
// }

// console.log(sum);

// another example of for loop.

// calculate the sum of 1 to 100

// let sum = 0;
// for (let i = 1; i <= 100 ; i ++ ){
//         sum = sum + i;
// }
// console.log(`sum=`,sum)

// calculate the sum of 1 to 100


// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n ; i ++ ){
//         sum = sum + i;
// }
// console.log(`sum=`,sum)

// while loop → condition based syntax given below

// let i = 1;
// while (i <= 5){
// console.log(`mani${i}`);
// i++;
// }

// jo hum nay upper wali example main for loop say kam kia tha wohi ab while loop say kia hy.
// hum nay let i jo lia tha wo hum change bhe kr sakty hain matlab abcd kuch bhe okay!.

// do-while → at least 1 baar chalega syntax given below

// let i = 1;
// do {
//     console.log(`mani ${i}`);
//     i ++;
// } while (i <= 5);

// ab use kia do while loop or wohi same kam kia hum nay bas difference itna hy k variable lany k bad `do` main type kia kam jis per loop lagana tha or updation condition set ki.
// or while main condition likh di is main code aik barr zaror run go q k condition bad main likha hy or jis per loop lagana tha wo first main likha hy.


// (infinite loop)  type  (never ending loop)

// 2. infinite loop (hint never use in real web ok!)
// example given below of infinite loop

// for(i = 1; i >= 0; i ++ ){
//         console.log(`i=`,i);
// }

// ========================================================================================================

// for-of loop → array values

// ( for-of loop ) (if somebody wants to print each letter of string/Array then we can use for-of loop)

// for of loop is used for string and arrays.this loop can work with the single value/index of string/arrays.

// let str = `usman`;
// for(let character of str){
//         console.log(character);
// }


// let str = "usmanghani";
// let size = 0;

// for (let length of str){
//     console.log("length =", length);
//     size ++;
// }
// console.log(size);

// ==========================================================================================================

// for-in → object keys

// (for-in loop)          (used for object and arrays and the key of object for loop)
//                        (for in loop hum ko object ki key print kr k deta hy )

// for (let i in obj){
//         do some work
// }

// const studentObject =  {

//             name: "usman",
//             age:33,
//             gpa : 7.5,
//             isPass: true,

// };

// for (let value in studentObject){

//     //  console.log( value , studentObject[value]);

//        let a = `i = ${value} value = ${studentObject[value]}`;
//         console.log(a);
// }

// ==========================================================================================================

// print num from 0 to 100 (even and odd)        by using(for-loop)type

// (when !== odd num will display and when === even num display)

// for(let num= 0; num <= 100; num ++){
//     if (num % 2 !== 0){
//          console.log(num);
//     }
// };


//                              (question solving)

//                              (by using prompt with while loop)
//                              (prompt say jo be return ata hy wo aik string hota hy )


// let gameNum = 25;

// let userNum = prompt("guess the game num :")

// while(userNum != gameNum){
//     userNum = prompt("you enter wrong number guess again");
// }
// console.log("congratulations you have enterd the right game number");

// ==========================================================================================================

// string is a sequence of characters, that is used to represent the Text.

// (the method to calculate length of string)

// let str = "usmanmanighanimanijani"

// console.log(str.length)

// let str = `usmanmanighanimanijani`
// size = 0;
// for (length of str ){
//     console.log(length);
//     size ++;
// }
// console.log(size);

// (string ki position agr single hy to index keh sakty hain or plurel position hy to indices)

// let str = "apna college"
// console.log(str[3]);

// (template literals)
// (a way to have  embedded expressions in strings)
// (string interpolation= jo hum template literals ko use krty hoy jo expressions
//  ya placeholders add krty hain us ko kehty hn string interpolation.)

//  $ yeh variable k liy hoga.  no space between $ sign and {} these brackets ok    ${} like this

// let obj ={
//     item : "pen",
//     price : 10,

// };

// console.log ("the cost of item =" , obj.item , "is" , "and price of item =" , obj.price , "price")

// let outPut = `the cost of item = ${obj.item} is and price of item = ${obj.price} price`;

// console.log(outPut);

// ==========================================================================================================

// (escape characters)  \n =    it means string main next line add krna.

// console.log ("usman\nghani");

//                      \t =    it means string main tab (space) add krna.

// console.log ("usman\tghani");

// (String method in javascript proogramming language)

// (These are built-in functions to manipulate a string)

// (note= string changed with upper and lower case method always called a new string ) (it means string is mutable---> not changeable )

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

// ==========================================================================================================


// (arrays in js------>collections of items with same type or same variable e.g below)(arrays are mutable)

// arrays    (arrays main position / index metter krti hy or is ka result linear main matlab aik line main show hota hy or arrays us waqat use krty hn jub aik ki type ka data ho or us ko store krna ho jasy marks of one entir class etc.)

// this is the example of arrays

// let students = ['usman','ghani','mani','mano','musfirah','abeerah','fatimah'];
// let marks = [55,66,77,88,99,44,33,22,11];

// loop will work with iterable like = string ,object ,arrays        (iterator means loop)

// looping over an Array  print all elements of array

// we are attempting the loop with these hearos with for loop method

// let heroes = [`antman,`,`spiderman`,`hulk` ,`stark`,`tomcriuse`,`ajay`,`amirkhan`,`salmankhan`]
// for(let a= 0; idx <heroes.length; a++){
//         console.log(heroes[a]);
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

// console.log(avg);

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

// let items = [250 , 645, 300, 900, 50];

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

// ========================================================================================================


// (functions)  (Block of code that performs a specific task, can be invoked whenever we needed.)

// function maniBhi(){
//         console.log(`mara name`);
//         console.log(`ghani bhi`);
// }
// maniBhi();

// ========================================================================================================


// function first_Function(msg ,n){
//         console.log(msg ,n);
// }

// first_Function(`how are you everyone`,100);

// ========================================================================================================


// function sum(x, y){
//     let s = x + y;
//         return s;

// }

// let val = sum(3,4);
// console.log(val);
// console.log(sum(3,4));

// (these both are same upper and lower function are same)

// function sum(x, y){
//     return x + y;
//         

// }

// let val = sum(3,4);
// console.log(val);
// console.log(sum(3,4));

// ========================================================================================================



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

//  map method (map method is very similar with forEach loop but the difference is map method give us a new arry while the forEach method only change the arry )

//  map method (creates a new array with the results of some operation. The value its callback returns are used to form new arry)

// Array.map(callbackFnx(value, index, arry))

// let newArr = arr.map((val)=>{
//     return val * 2 ;
// })

// filter method

// we are now finding the even num in arr by using filter method

// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0;
// })
// console.log (evenArr);

// reduce method (performs some operations & reduces the array to a single value. It returns that single value)

// let arr = [1,2,3,4,5];
// let sum =arr.reduce((previous,current)=>{
//     return previous + current;
// })

// console.log (sum);

// now we are finding the largest val in array

// let arr = [1,2,3,4,5,6,7,8];

// let greater =arr.reduce ((previous, current)=>{
//     return previous > current ? previous : current;
// })

// console.log(greater);

// Question solving

// we are giving array of marks of students. Filter out the marks of students that scored 90+

// let arr = [22,45,67,87,99,97,56,96,89];

// let topper = arr.filter((val)=>{
//     return val > 90;
// })
// console.log(topper);

// Question solving

// Take a number n as input from the user. Create the the array from 1 to n.

// use the reduce method to calculate sum of all numbers in the array.

// use the reduce method to calculate product of all numbers in the array.

// part one
// let n = prompt (`n number from user =`);

// arr = [];

// for (let i = 1; i <= n; i ++){
//     arr [i -1] = i;
// }
// console.log(arr);

// // part two
// let sum = arr.reduce((sum,current)=>{
//     return sum + current;
// })

// console.log(sum);

// // part three find product factroial  (dont use for biger num, will come error.don't use factorial for biger number)
// let factroial = arr.reduce((previous , current)=>{
//     return previous * current;
// })

// console.log( factroial);

// DOM (Document Object Model)
// what is ODM?---> when the page is loaded, the browser creates a document object model of the page.

// Window Object => the window object an open window in a browser. it is browser's object not javascript and is automatically created by browser.it is a global object with lots of properties and methods.

// html ko hum javacript main acess kr sakty hain or html k sary element javacript main a kr aik object main convert ho jaty hain or us object ko hum document kehty hain.document object, window object main available hota hy.

// console.dir ---> is used to print the object (console.dir is also a part of window object)

// document is the representation of html and we can also say document is a model.

// we can also say, node is a object and object is a node.

// run time per jub user website per ho hum javascript k through dynamically changes kr sakty han html main.
// or hum nay color bhe change kia hy example k liy.
// document.body.style.background = `green`     (try it with console in inspect )

// ===============================================================================================

// DOM manipulation

// let h1 = document.getElementById(`mani`);
// console.log(h1)

// let h1 = document.getElementsByClassName(`mano`);
// console.dir(h1);

// let p = document.getElementsByTagName(`p`);
// console.dir(p);

// document.body.childNodes[3].innerText = `abcd`;

// query selector (query selector humary liy node list return krta hy)
// query selector say hum id, class, tag sub ko return kr sakty hain or is ko he use krna chahey.

// below example main only first element/tag show ho ga

// jo below example hy is main hum nay tag ko access kia hy.hum ko maloom hy hum tag,id,class access kr sakty hain.

// let abc = document.querySelector(`p`);
// console.dir(abc);

// below example main all elements/tag show ho gay.

// let abc= document.querySelectorAll(`p`);
// console.dir(abc);

// ab hum below example main class ko access karin gay.

// let abc = document.querySelector(`.mano`);
// console.dir(abc);

// ab hum nay id ko access kia hy look below example.

// let abc = document.querySelector(`#mani`);
// console.dir(abc);

// properties topic.

// tagName:     returns tags for element nodes

// example tagName

// let abc = document.querySelector(`div`);
// console.dir(abc);
// console.dir(abc.tagName)

// innerText:   returns the text content of the element and all its children

// example innertext

// let div = document.querySelector(`div`);
// console.dir(div);
// console.dir(div.innerText);

// innerHTML:   returns the plain text or HTML contents in the element

// example innerHTML

// let div = document.querySelector(`div`);
// console.dir(div);
// console.dir(div.innerHTML);

// textContent: teturns textual content even for hidden elements

// example textContent

// let div = document.querySelector(`div`);
// console.dir(div);
// console.dir(div.textContent);

// tyes of nodes        1.text node     2.comment node      3.element node

// lets practice

// Create a H2 heading element with text `hello javaScript`. Append `from apna college students` to this text using JS.

// create 3 divs with common class name `box` access them and add some unique text to each of them.

// let h2 = document.querySelector(`h2`);
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + `apna collage students`;

// document.querySelector(`div`).children;

// document.querySelector(`div`).firstChild;

// document.querySelector(`div`).lastChild;

// let divs = document.querySelectorAll(`div`);
// console.dir(divs);

// DOM Manipulation     insert elements (first create and then add/insert the element)

// .getAttribute (attr);            to get the attribute value.

// .setAttribute (attr, value)      to set the attribute value.

// let el = document.createElement(`div`)

// node.append(el)      adds at the end of node     (inside)
// node.prepend(el)     adds at the start of node   (inside)
// node.before(el)      adds before the node        (outside)
// node.after(el)       adds after the node         (outside)
// node.remove()        removes the node

// first we create any element for example button, para, link, heading etc, then we will use the above methods to insert the element.

// example given below.

// let we create one button by using javasript and then we will add them to the javascript.

// let button = document.createElement(`button`);
// button.innerText = `click me!`
// console.log(button);

// // now button has be created,now we will insert to the brower by using DOM Manipulation methods as we dicussed above. but we first select with query selector where to insert the button.

// // suppose we want to insert the button to the third div at the start and also at the end of third div.

// let div3 = document.querySelector(`.third`);
// div3.append(button);

// now button has been added to the third div at the end postion.

// let h1 = document.createElement(`h1`);
// h1.innerText = `this is my first para adding to javascript without using html file`;
// console.log(h1);
// // now we add this para to the first div by selecting div class. but first we select with query selector.

// let div1 = document.querySelector(`.first`);
// div1.prepend(h1);

// question solving

// let button = document.createElement(`button`);
// button.innerText = `click me!`;
// button.style.color = `white`;
// button.style.backgroundColor = `red`;
// button = document.querySelector(`body`).prepend(button);
// let para = document.querySelector (`p`);

// =======================================================================================================

// Events in javaScript     (The change in the state of an object is known as an Event)
// Events are fired to notify code of `interesting changes` that may effect code execuation.

// creating a button that change the mode from light to dark and vice versa (night 1:39 AM)

// let btn = document.querySelector(`#btn`);

// let mode = `light`

// btn.addEventListener(`click`, ()=>{

//     if (mode === `light`){

//         mode = `dark`;
//         document.querySelector(`body`).style.backgroundColor = `black`;
//     }else {
//         mode = `light`;
//         document.querySelector(`body`).style.backgroundColor = `white`;

//     }
//     console.log(mode);
// });

// now we are using css for changing colors. In this case the styling file is css and connected with js by adding (body.classList.add(`dark/white`))

// let btn = document.querySelector(`#btn`);

// let mode = `light`

// let body = document.querySelector(`body`);

// btn.addEventListener(`click`, ()=> {

//     if (mode === `light`){

//         mode = `dark`;
//         body.classList.add(`dark`);
//         body.classList.remove(`white`);
//     }else {
//         mode = `light`;
//         body.classList.add(`white`);
//         body.classList.remove(`dark`);
//     }
//     console.log(mode);
// });

// this is a pratice Game

// let userScore = 0;
// let computerScore = 0;

// const choices = document.querySelectorAll(`.choice`);
// const msg = document.querySelector(`#msg`);
// const userScorePara = document.querySelector(`#user-score`);
// const computerScorePara = document.querySelector(`#computer-score`);

// const genCompChoice = () => {
//   const options = [`rock`, `paper`, `scissors`];
//   const randomidx = Math.floor(Math.random() * 3);
//   return options[randomidx];
// };

// const drawGame = () => {
//   msg.innerText = `Game was Draw. Play Again!`;
//   msg.style.backgroundColor = `#081b31`;
// };

// const showWinner = (userWin, compChoice, userChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You Win! your ${userChoice} Beats ${compChoice}`;
//     msg.style.backgroundColor = `green`;
//   } else {
//     computerScore++;
//     computerScorePara.innerText = computerScore;
//     msg.innerText = `You lost. ${compChoice} Beats your ${userChoice}`;
//     msg.style.backgroundColor = `red`;
//   }
// };

// const playGame = (userChoice) => {
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     // draw Game
//     drawGame();
//   } else {
//     let userWin = true;

//     if (userChoice === `rock`) {
//       //sciossrs , paper
//       userWin = compChoice === `paper` ? false : true;
//     } else if (userChoice === `paper`) {
//       // rock , scissors
//       userWin = compChoice === `scissors` ? false : true;
//     } else {
//       //paper , rock
//       userWin = compChoice === `rock` ? false : true;
//     }
//     showWinner(userWin, compChoice, userChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener(`click`, () => {
//     const userChoice = choice.getAttribute(`id`);
//     playGame(userChoice);
//   });
// });
