// const account_Id = 45464
// let account_email = "ritik@google.com"
// var account_password = "5889898"
// account_city= "Bihar"

// account_Id =565680 // Not Allowed

// console.log(account_Id);

/*
prefer not to use var
because of issue in block space and functional scope
*/

// account_email = "ritik@microsoft.com"
// account_password = 789632145
// account_city = "Muzaffarpur"

// console.table([account_Id,account_email, account_password, account_city])

             // ..........Day 2 .......................//

// "use strict"; // treat all js code as new version

// alert(3+3) // Not working because we are using node js not browser

/*console.log(3
    +3
) code readibility should be high */

// Datatypes {Primitive}
/*  1. String ==> ""
    2. number 
    3. bigint
    4. boolean ==> true/false
    5. null ==> Standlone value
    6. symbol ==> for finding uniquness
*/

// Object
// console.log(typeof null); // output is object


                            // ..........Day 3 .......................//
                                    //datatype conversion

// let score1 = 33
// let score2 = "33"
// let score3 = "33abc"
// let score4 = null
// let score5 = undefined

// console.log(typeof score1);
// console.log(typeof score2);
// console.log(typeof score3);
// console.log(typeof score4);

// let valueInNumber1 = Number(score1)
// let valueInNumber2 = Number(score2)
// let valueInNumber3 = Number(score3)
// let valueInNumber4 = Number(score4)

// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);

// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(typeof valueInNumber3);
// console.log(typeof valueInNumber4);

    // "33" ==> 33
    // "33abc" ==> NaN
    // undefined ==> NaN

// let loggedIn = 0;

// let booleanLoggedIn = Boolean(loggedIn)
// console.log(booleanLoggedIn);

// 1 ==> true ; 0 ==> flase  
// "" ==> false ; 
// "Ritik" ==> true

// let someNumber = 55;
// console.log(someNumber);

// let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber)

                                // ..........Day 3 .......................//
                                    //     Operations

// let value= 3
// let negValue = -value

// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(3%2)


// let str1 = "hello "
// let str2 = "Ritik"

// let str3 = (str1 + str2)

// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);      //output = 122
// console.log(1 + 2 + "2");      // output = 32

// console.log(3 + 4 * 4 % 3) // use parenthesis in such case 

// console.log(+true) // output ==> 1 but not clear // Changes boolean value in number

                    // ..............Day 4 .................
                           // Comparison Operator

// console.log(2>1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);


// console.log("2" > 1)
// console.log("02" > 1)



// console.log(null == 0);  //false
// console.log(null > 0);   //false
// console.log(null < 0);   //false
// console.log(null <= 0);  //true
// console.log(null >= 0);  //true

// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined > 0);  // false


                    //..............Summary od Datatype...................//

//   Primitive ==> 7 Types

//    1. String
//    2. Number
//    3. Boolean
//    4. Null
//    5. Undefined
//    6. Symbol
//    7. BigInt



// Reference type/ Non-primitive 

// 1. object
// 2. Array
// 3. Functions


//                     Memory Allocation            //

//  stack(primitive )
//    heap(Non primitive )

// let myName = "Ritik"
// let yourName = myName
// yourName = "shanu"

// console.log(myName); // Ritik
// console.log(yourName); // Output shanu


// let details = {
//     name: "mohit",
//     class:"btech"

// }

// console.log(details); // { name: 'mohit', class: 'btech' }
// details.name = "ritik"
// details.class ="btech(CSE)"
// console.log(details); //{ name: 'ritik', class: 'btech(CSE)' }


//                            String                    //

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));


// const name = "Ritik"

// console.log(name.at(2));
// console.log(name.charAt(3));
// console.log(name.charCodeAt(3))  // it returns the unicode of the character
// console.log(name[2]);

let str = "Apple, Banana, Kiwi";
// console.log(str.substr(2, 7))
// console.log(str.at(7))


// ********************************** Nums And Maths**********************************//

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

const number = 5.689484

// console.log(Math.round(number))
// console.log(Math.max(2,5,46,84,22,41))
console.log(Math.exp(1));

