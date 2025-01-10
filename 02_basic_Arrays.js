// ****************************** Arrays ************************************// 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 5) 

// console.log(myn1);  // output : [ 1, 2, 3, 4 ] ---------> Not include the last index
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// console.log(myn2);// output : [ 1, 2, 3 ]      ---------------> include the last iindex
// console.log("C ", myArr);


const myn3 = myArr.splice(0, 4) // output :[ 0, 1, 2, 3 ]
// console.log(myn3); 

// NOTE <<< The original string also changes in splice method


// ************************************************** Day 2 ****************************************************

const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash" ,"batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)   // output : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) // output: flash

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros) // output : [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

            //   SPREAD OPERATOR(...) : "use to concatenate two or more arrays"
    // prefered 
            // const all_new_heros = [...marvel_heros, ...dc_heros]
            // console.log(all_new_heros) // output : [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
            
            
            
//  console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting
            
let score1 = 100
let score2 = 200
let score3 = 300
   
console.log(Array.of(score1, score2, score3));

