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

// console.log(cond1 && cond2);

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

// yeh uper wala function sirf print ho ga value return nh kary ga.

// ab below function print bhe ho ga or value bhe return kary ga.

// const arofun = (a,b,c) => {
//     let sum = a+b+c;
//     return sum;
// }
//  let total =arofun(10,13,14);
//  console.log(total);

// ========================================================================================================

// multiplication arrow function

// const multi = (x , y) => {
//          console.log(x * y);

// }
// multi( 5 , 5);

// const multi = (x , y) => {

//        let s =  x * y;
//         return s;

// }

// let result = multi (5,5);
// console.log(result);

// ========================================================================================================

// i am making a function that shows the vowels words in the string. lets start
// itna code to hum ko function call per jo string write karien gy wo print kry ga.below code

// function countVowels (string){
//         for (let character of string)
//                 console.log(character);
// };
// countVowels(`ranamuhammadusmanghanimanijani`);
//
// ab uper wala function hum arrow function say banaien gay.below function check karin.

// const countVowels = (string) =>{
//     for (let character of string){
//           console.log(character);
//     }
// }
// let count = countVowels(`abcdeeeeefgjsalfjslfjsa`);
// console.log(count);

// ========================================================================================================

// this function is make for to the calculation of vowels words in the string.we are using for of loop in this function.

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
// let vowels = countVowels(`usman`);
// console.log(vowels);

// ========================================================================================================

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

// ========================================================================================================

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

// below is the example of forEach, he will not work with string only with arry understan!.

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

// For a given arry of numbers, print the square of each value by using forEach method.

// let arr = [1,2,3,4,5,]

// arr.forEach(function mySquare(val){
// console.log(val*val);
// console.log(val **2)
// })

// now with arrow function

// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val * val)
//     console.log(val **2)
// })

// let arr = [1,2,3,4,5];
//  let mani = (val) =>{
//     console.log(val ** 2);
//  }
// arr.forEach(mani)

// ========================================================================================================

//  map method (map method is very similar with forEach method but the difference is map method give us a new arry while the forEach method only change the arry )

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

// Window Object => the window object an open window in a browser. it is browser's object not javascript. is automatically created by browser.it is a global object with lots of properties and methods.

// html ko hum javacript main acess kr sakty hain or html k sary element javacript main a kr aik object main convert ho jaty hain or us object ko hum document kehty hain.document object, window object main available hota hy.

// console.dir ---> is used to print the object (console.dir is also a part of window object)

// document is the representation of html and we can also say document is a model.

// we can also say, node is a object and object is a node.

// run time per jub user website per ho hum javascript k through dynamically changes kr sakty han html main.
// or hum nay color bhe change kia hy example k liy.
// document.body.style.background = `green`     (try it with console inspect )

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

// Create a h2 heading element with text `hello javaScript`. Append `from apna college students` to this text using JS.

// //  a += 4          a = a + 4

// let h2 = document.querySelector(`h2`);

// h2.innerText +=  `from apna college students`;

// console.dir (h2.innerText);

// let h2 = document.querySelector(`h2`);

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + `apna collage students`;

// create 3 divs with common class name `box` access them and add some unique text to each of them.

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

// creating a button that change the mode from light to dark and vice versa (night 1:39 AM /march/2026)

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
//

// ab hum below example main hum without HTML and CSS k hum nay button bhe create kia hy DOM say or styling bhe di hy.

// let button = document.createElement(`button`);
// button.innerText= `click me`;
// button.style.color = `blue`;
// button.style.backgroundColor = `yellow`;
// document.querySelector(`body`).append(button);
// let mode = `light`;
// button.addEventListener(`dblclick`,()=>{
//     if (mode === `light`){
//         mode = `dark`;
//         document.querySelector(`body`).style.backgroundColor = `orange`;
//     }else{
//         mode = `light`;
//         document.querySelector(`body`).style.backgroundColor = `black`;
//     }
//     console.log(mode);
// })

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

// =======================================================================================================

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

// =======================================================================================================

// const student = {
//     fullName :`usman`,
//     marks: 66,
//     printMarks: function (){
//         console.log(this.marks);
//     }
// }
// this is a new keyword and it means this.marks = marks of student object.
// javaSript main jub bhe hum this keyword use krty hain kisi object main to us ka matlab hy k wohi he object jis per kam kar rahy hain.

// =======================================================================================================

// Prototype (__proto__)(Prototype apny ap main aik object hota hy)
// (typeof array = is also an object)

// const employee = {
//     calcTax1 (){
//         console.log (`tax rate is 10%`);
//     },
//     calcTax2 : function (){
//         console.log(`tax rate is 20%`);
//     }
// };

// const employee = {
//     calcTax1 (){
//         console.log (`tax rate is 10%`);
//     }
// };

// uper example main aik object main do function hain or dono he sahi method say banay gay hain lakin first wala easy hy.

//  karanArjun = {
//     salary : 50000,
// }
// agr hum ko employee object ka function karanArjun ki object say connect krana ho wo kasy karin gay matlab calcTax wala function karanArjun wali object ko chahay to kia karien?

// karanArjun.__proto__ = employee;

// asa syntax run karny say jo function and method employee object k pass hon gay wo sary karanArjun ko mil jaien gay.matlab agr ab hum karanArjun ki object ko console main open karien gay to calcTax wala function karanArjun ki object mian bhe show ho ga.right boss!

// agr object and prototype main same method hon to object wala method kam kary ga prototype wala example nh give below.

// const employee = {
//   calcTax1() {
//     console.log(`tax rate is 10%`);
//   },
// };

// karanArjun = {
//   salary: 50000,
//   calcTax1() {
//     console.log(`tax rate is 20%`);
//   },
// };

// ab karanArjun ka tax rate 20% or employee object ka 10% hy or dono main same function hy ab kon sa kam kary ga.certainly agr hum karanArjun object ko print karwaien gay to karanArjun wali object wala function he print ho ga.it means (// agr object and prototype main same method hon to object wala method kam kary ga prototype wala example nh give below.)

// if object and prototype have same method, object's method will work.

// karanArjun.__proto__ = employee;

// classes in javaScript.(Class is a program-code template for creating objects.)
// classes basically aik object ko banany ka template dati hain.
// example agr aik company hy or us main 50 employee hian or her aik ka salary package bhe ho ga or email,phoneNum,address or name etc to kia hum 50 object banay ya aik template banaien ofcourse template is better.

// class aik object k ley aik bluePrint hoti hy.

// those object will have some state (variables) and some behaviour (functions) inside it.

// syntax of class MyClass

// class MyClass{
//     constructor(){}
//     myMethod (){}

// }

// let myObj = new MyClass(); (yeh syntax hy aik class template say aik object create krny ka)

// class toyotaCar {
//     start(){
//         console.log(`start`);
//     }
//     stop(){
//         console.log(`stop`);
//     }
//     setBrand (brand){
//         this.Brand = brand;   // this = jis object nay function call kia. jo this k sath likha hy(brand) wo abject ki property hy. or dosra hy jo hy wo function ka argument hy.
//     }
// }

// let fortuner = new toyotaCar();
// fortuner.setBrand(`fortuner`);
// let lexus = new toyotaCar();
// lexus.setBrand(`lexus`);

// ab hum nay aik class template banai toyotaCar or aik object bhe banaya fortuner ka.(upper banaya).

// =======================================================================================================

// constructor (automatically created by javaSript)

// constructor()method is:

// automatically invoked by new

// initializes object

// let obj = new myClass ();    (is main jo new keyword hy wo create kary ga object main constructor or hum custom constructor bhe create kr sakty hain. )

// Use of constructor = jub hum kisi object k initialize main koi kam karna ho matlab start main.

// constructor hota method hy

// class toyotaCar {
//     constructor(){
//         console.log (`creating new object`);

//     }
//     start()
//     {
//         console.log(`start`);
//     }
//     stop()
//     {
//         console.log(`stop`);
//     }
//     setBrand (brand)
//     {
//         this.Brand = brand;
//     }
// }

// let fortuner = new toyotaCar();     // consrtuctor

// let lexus = new toyotaCar();        // consrtuctor

// =======================================================================================================

// class toyotaCar {
//     constructor(brand , mileage){
//         console.log (`creating new object`);
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start()
//     {
//         console.log(`start`);
//     }
//     stop()
//     {
//         console.log(`stop`);
//     }

// }

// let fortuner = new toyotaCar(`fortuner`,10);

// console.log(fortuner);

// let lexus = new toyotaCar(`lexus`, 15);

// console.log(lexus);

// =======================================================================================================

// inheritance in javaSript

// (inheritance is passing down properties and methods from parrent class to child class. )

// jasy dada dadi nana nani say humary maa or baap nay liy or un say hum or hum say humary bachy.

// example

// class parrent{
//     hello(){
//         console.log(`hellp`);
//     }
// }

// class child {
//     hello(){
//         console.log(`hello`);
//     }
// }

// ab humary pass do classes hain aik parrent and second child or dono main same function hy
// ab hum parrent class say inhertiance karien gay child class main example give below.

// class parrent {
//   hello() {
//     console.log(`hello`);
//   }
// }

// class child extends parrent {}

// let obj = new child();

// agr hum console.log karien (obj.hello();) to hello function inhertitate to gaya object main
// ab is main howa yeh hy k obj.hello() JS nay hello() ko first obj main dakha nh mila phr child class main nh mila phr mila us ko parrent class main to obj.hello()= hellp print howa. so simple!

// if child and parrent have same methods or behaviours then child's method will work example give below.

// class person {
//   eat(){
//     console.log(`eat`);
//   }
//   sleep(){
//     console.log(`sleep`);
//   }
// }

// class children extends person{
//   work(){
//     console.log(`work hard is a key of success`);
//   }

// }
// let childObj = new children();

// ab uper waly code main person k pass jo kuch hy wo sab mil gaya children class ko or sab save ho gaya childObj mian ab ap childObj.eat/sleep/work/ in main say kuch beh use kar sakty ho.

// Jab tum kisi class se object banate ho, to us object ko us class ka instance kehte hain.

// Class = design / blueprint

// Instance = us design se bani hui real cheez

// class person {
//   eat(){
//     console.log(`eat`);
//   }
//   sleep(){
//     console.log(`sleep`);
//   }
//   work(){
//     console.log(`do not work yet`);
//   }
// }

// class Engineer extends person {
//   work(){
//     console.log(`solve the problems`);
//   }
// }

// let personObj = new person();

// let EngineerObj = new Engineer();

// if child and parrent have same methods or behaviours then child's method will work example give below.(this is called Method Over-riding)

// new person(); = yeh jo likha hy is ka matlab hum person class ka object bana rahy ho.

// new Engineer(); = yeh jo likha hy is ka matlab hum Engineer class ka object bana rahy ho.

// class person {
//   constructor(){
//     this.species = `home sapiens`;
//   }
//   eat(){
//     console.log(`eat`);
//   }
//   sleep(){
//     console.log(`sleep`);
//   }
//   work(){
//     console.log(`do not work yet`);
//   }
// }

// class Engineer extends person {
//   work(){
//     console.log(`solve the problems`);
//   }
// }

// let personObj = new person();

// let EngineerObj = new Engineer();

// upper hum nay aik constructor liya hy or jub bhe person class koi new object banay gai to constructor create hoga sabsay phly agr hum custom constructor na bhe creat karien to javaSript khud create kr lati hy or shyed upper yeh hum nay parha bhe ho.
// G bilkul or agr ab hum personObj and EngineerObj ko console.log main print karien to species dono object main show hon gai q k hum inheritance method use kar rahy hain with the keyword of extends.

// =======================================================================================================

// super Keyword

// The super keyword is used to call the constructor of its parrent class to access the parrent's properties and methods.
// in other words we can say child class say hum parrent class ki properties and methods ko access krna parta hy.ya parrent class k constructor ko call krna parta hy.we use super keyword to call the constructor of a parrent class.
// we have to use super keyword whenever we want to use child class or using this keyword.
// we have to write super keyword before `this` and `exit` constructor.

// ab agr person class main name add kran ho because more commonly, person class main name property honi chahy agr ko bhe person ho us ka name to hota he hy.

// class person {

//   constructor(){
//     this.species = `home sapiens`;
//   }
//   eat(){
//     console.log(`eat`);
//   }
// }

// class Engineer extends person {

//   constructor(branch){
//       super();// to invoke parrent class constructor

//   }
//   work(){
//     console.log(`solve the problems`);
//   }
// }

// let EngObj = new Engineer();

// agr humary pass do constructor hain means parrent class or child class ka constructor to hum agr child class waly ko call kairn direct or parrent waly ko call agr nh kia howa to hum ko error mila ga.
// it is necessory to call first parent class constructor by using super key word. Right !

// class person {
//   constructor(name) {
//     this.species = `home sapiens`;
//     this.name = name;
//   }
//   eat() {
//     console.log(`eat`);
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     console.log(`solve the problems`);
//   }
// }

// let EngObj = new Engineer(`ali`);

// up and down code main difference. hum nay parent class (person) ko this.name ki property d hy or name ko as a parameter pass kia hy constructor main or wohi name ko child class k constructor ko as a parameter pass kia hy or super main bhe or jaha child class ki instance object banai hy waha argument pass ker deya hy `ali`.

// class person {
//   constructor() {
//     this.species = `home sapiens`;
//   }
//   eat() {
//     console.log(`eat`);
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   work() {
//     console.log(`solve the problems`);
//   }
// }

// let EngObj = new Engineer(`ali`);

// ab hum nay this.name ki property child class ko di hy is liy hum ko super main call nh krna para lakin constructor main to call zarori hy waha per to paremeter to pass krna ho ga tab he jo name dain gay print hoga. kuch had tak concept howa clear !?

// class person {
//   constructor(name) {
//     this.species = `home sapiens`;
//     this.name = name;
//   }
//   eat() {
//     console.log(`eat`);
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     super.eat();

//     console.log(`solve the problems`);
//   }
// }

// let EngObj = new Engineer(`ali`);

// ab agr EngObj.work(); ko print krwaien gy to first eat then work ay ga right!

// =======================================================================================================

// question solving:

// class User {
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//   }
//   viewData(){
//     console.log(`YOU CAN VIEW DATA`);
//   }
// }

// class Admin extends User {
//   constructor(name, email){
//     super(name,email);
//   }
//   editData(){
//     console.log(`allow to edit website`);
//   }
// }

// let student1 = new User (`usman`,`mani@gmail.com`);
// let teacher1 = new Admin(`abc`,`abc@gmail.com`);

// =======================================================================================================

// Error Handling:
// try{

// }catch(err){
//   console.log(err);
// }

// let a = 5;
// let b = 6;
// console.log(a+b+b);
// console.log(a+b+b);
// console.log(a+b+b);
// console.log(c+a+b);  // error line
// console.log(a+b+b);
// console.log(a+b+b);
// console.log(a+b+b);

// asa code error say upper tak excute hoga lakin erroy handling syntax say error line ko try catch main agr likn dain gay to neachy wala code bhe excute hoga.

// let a = 5;
// let b = 6;
// console.log(a+b+b);
// console.log(a+b+b);
// console.log(a+b+b);
// try{
// console.log(c+a+b);  // error line

// }catch(err){
//   console.log(err);
// }finally{
//   console.log(`yeh finally block hai hamesha chalega`);
// }
// console.log(a+b+b);
// // throw new Error (`this is not fine`); //apni tarif say error add krna custom Error (E capital use hoga.)
// console.log(a+b+b);

// console.log(a+b+b);

// =======================================================================================================

// ab hum async promise chain and callback hell ho samijhaien gay inshallah.

// 1sec = 1000ms        2sec = 2000ms use ms in setTimeout function.

// Synchronous:

// (it means the code runs in the particular sequence of instructions given in the program.)
// each instruction waits to complete the previous instruction to complete its excuation.

// // example :
// console.log(`one`);
// console.log(`two`);
// console.log(`three`);

// matlab yeh k aik sequence say code chaly ga phlay 1 phr 2 and 3 print ho ga.

// Asynchronous:

// Due to synchronous programming, sometime important instructions get blocked due to some previous instructions, which causes the delay in the UI.
// asynchronous code excuation allows to excute the next instructions immediately and doesn't block the flow.

// Asynchronous example: with compact syntax:

// console.log(`line1`);
// console.log(`line2`);
// setTimeout( ()=>{
//     console.log(`hello`);
// },4000)
// console.log(`line3`);
// console.log(`line4`);

// exactly howa yeh hy k hum agr koi program bana rahy hian or koi asi chez hy jis per excution time required hy or hum chahty hain k jis ko time delay hy wo lay lay lakin us k bad wala code to excute ho flow k sath. asa na ho k jis excutaion ka wait karien hum wo bad waly syntax k liy zarori bhe na hon to waha per asynchronous sequence use krna parata hy.

// Asynchronous example: with simple syntas:

// console.log(`line1`);
// console.log(`line2`);

// function hello(){
//     console.log(`hello`)
// }
// setTimeout(hello, 2000);

//  setTimeout callback leta hy or callback kia hota hy? jo is main hello hy kisi function ka name argument main pass krna callback kehlata hy

// console.log(`line3`);
// console.log(`line4`);

// =======================================================================================================

// Callbacks:

// a callback is a function passed as an argument to another function.

// example callback:

//  const USMAN = ()=>{
//     console.log(`beautifull weather of world!`);
// }
// const GHANI = (cb)=>{
//     console.log(`this is amazing`);
//     cb();
// }
// GHANI(USMAN);

// USMAN is a callback function.

// =======================================================================================================

// Callback Hell:

// nested callbacks stacked below one another forming a paramid structure.(paramid of doom).

// function getData (data){
//     setTimeout(() => {
//     console.log(`dataId=`,data);

//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// is main function ko call ki (getData ) ko or argument main 3 different values bhe pass ki
// howa yeh k 3no calls ka print aik sath hoya 2 sec bad due to setTimeout.

// aik data print ho tab dosra ka print ho or phr tesry ka aik sath print data na ho 3no ka. us kaam ki try karty hain.

// function getData (){

//         console.log(`hello usman`);
// }

// setTimeout(getData,2000);

// =======================================================================================================

// const getData = (Data) =>{
//     setTimeout(()=>{
//         console.log(`getData=`,Data);
//     },3000)
// }

// console.log(getData(147));

// 3sec bad 147 print ho ga.

// =======================================================================================================

// we are learning callback chaining (data flow).

// const getData = (dataId, getNextData) => {
//   setTimeout(() => {
//     console.log(`data=`, dataId);
//     if (getNextData){
//       getNextData();

//     }

//   }, 3000);
// };
// getData(1, () => {
//   getData(2);
// });

// in upper condition: syntax main getData function nh arrow function hy or two parameter hain.
// (dataId,getNextData) phr hum nay setTimeout main dataId print kerwaya or bad main if use kia yeh new chez lagi mujy is time to main nay socha k note kr don.if say phlay aik bat--->  getData k argument main hum nay do value pass ki hain. 1 and ()=>{getData(2);}  yeh hain phali value (1) save hui dataId parameter main or ()=>{getData(2);} yeh save hui getNextData jo k 2nd parameter hy.ab hum nay if condition (check) lagi hy or check kia hy k agr to getNextData humara function hy to us ko call karo nh to na karo.yahan per getNextData function jo hy wo getData ko jub call keya or arrow fun say as a value pass kia to yeh fun ban gaya.

// () => { getData(2); } ek anonymous arrow function hy.

// Iska matlab:

// Iska koi naam nahi hai
// Ye ek function hi hai
// Tum ne isay as a value pass kiya hai agrument main.

// const getData = (dataId, getNextData) => {
//   setTimeout(() => {
//     console.log(`data=`, dataId);
//     if (getNextData){
//       getNextData();
//     }
//   }, 2000);
// };

// getData(1, () => {
//   getData(2,()=>{
//     getData(3,()=>{
//         getData(4,()=>{
//             getData(5);
//         });
//     });
//   });
// });

// it is called callback hell (is also called a nested callback)
// Callback kya hota hai?

// 👉 Callback = wo function jo kisi doosray function ko as a argument diya jata hai, taake baad mein call ho

// =======================================================================================================

//promise: promise is used to handle the callbackhell problem.we can say it is more updated syntax from callback syntax.

// Promise is for `eventual` completion of task. It is an object in JS.It is a solution to callback hell.

// syntax of promise is given below:

// let promise = new Promise ((resolve,reject)=>{
//                      fun with two handlers  })

// (resolve & reject are callbacks given by JS )
// callbacks means hum in ko argument main use karien gay ok.
// A javaScript promise object can be:

// pending: (it means in process)

// resolved:(it means completed)        (resolve)(result)

// rejected:(it means canceled)         (reject) (error)

// promise has state (pending,fulfilled) & some results (result for resolve & error for reject).

// how to use promise:

// promise.then ((res)=>{....})

// promise.catch ((err)=>{....})

// there are two promise methods we can use.

// jp upper hum nay callback say kam kia tha ab promise say kar rahy hain example given below.(promise chain)




// const getData = (dataId) => {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`data=`, dataId);
//       resolve(`fulfilled`);
//     }, 1000);
//   });
// };

//  getData(1)
//     .then((resolve)=>{
//     console.log(resolve);
//     return getData(2);
// })
// .then((resolve)=>{
//     console.log(resolve);
//     return getData(3);
// })
// .then ((resolve)=>{
//     console.log(resolve);
//     return getData(4);
// })
// .then ((resolve)=>{
//     console.log(resolve);
//     return getData(5);    
// })
// .then((resolve)=>{
//     console.log(resolve);
// })


// =======================================================================================================


// async / await        (async function always returns a promise)

// async function myFunction(){.....} 

// hum kisi normal fun k sath async laga kr us ko async function bana sakty hain hy.

// function hello (){
//     console.log(`hello`);
// }

// uper wala simple fun hy normal or hum ab async fun bana rahay hain.

// async function hello (){
//     console.log(`hello`);
// }

// now above code is a async function.

// =======================================================================================================



// const getData = (DATA) => {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`data received`,DATA);
//       resolve(200);
//     }, 1000);
//   })
// }

// async function getingData(){
//     console.log(`getting data1.......`);
//     await getData(1);
//     console.log(`getting data2.......`);
//     await getData(2);
//     console.log(`getting data3.......`);
//     await getData(3);
//     console.log(`getting data4.......`);
//     await getData(4);
//     console.log(`getting data5.......`);
//     await getData(147);

// };


// This is all about async-await. so simple as compared to promise and callback syntax.

// =======================================================================================================


// API(Application Programming Interface)

// fetch API

// The fetch API provides an interface for fetching(sending/receiving) resources.

// It used Request and Response objects.

// The fetch method() is used to fetch a resourse (data).


// let promise = fetch (url,[options])

// AJAX
// JSON
// json()   it is also asynchronous method (function) and also return promise.
// fetch () it is also asynchronous method (function) and also return promise.




// const url = "https://jsonplaceholder.typicode.com/posts"
// const title = document.querySelector(`#title`);
// const button = document.querySelector(`#btn`);
// const buttonName = button.innerText = `Click Me!`;

// using method under async and await.

// const dogWealth = async() =>{
//     let response = await fetch (url);
//     console.log(response);
//     let data = await response.json();
//     title.innerText = data[5].title;
// }

// using method under promise chaining.


// function dogWealth() {
//     fetch (url).then ((response)=>{
//        return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         title.innerText = data[5].title;

//     });
// }
//     button.addEventListener(`click`,dogWealth);

// hum nay aik api ko request send ki or phr us nay hum ko aik response return kr diya.
// phr hum nay aik html main para ka tag banaya or us ko innerHTML say select kia or response jo aya us main say title ko print kia or us ko para k tag main save kr diaya.
// button click krny per response return aya or us ka title bhe print kia hum nay running time per innerHTML say.



// =======================================================================================================


// calculator project

// let display = document.querySelector(`#display`);

// function appendValue(value){
//     display.value += value;
// }


// function clearDisplay () {
//     display.value  = "";
// }

// function calculateResult (){
//     display.value = eval(display.value);
// }

