// ************************ Functions  ***************************************\\
// const name ="ritik";


// function printMyName (){
//     console.log(`My name is ${name}`)
//     console.log(`My name is ${name}`)
//     console.log(`My name is ${name}`)
//     console.log(`My name is ${name}`)
//     console.log(`My name is ${name}`)
//     console.log(`My name is ${name}`)
// }
// printMyName()


// function sum (number1,number2){
//     console.log(number1+number2);   
// }
// sum(3,"a")
// const result = sum(3,8)
// console.log(result); // OUTPUT : undefined 


function sumOfTwoNumbers (number1, number2){
    // let result = number1+ number2;
    // return result;

return number1+number2;
}

const finalResult = sumOfTwoNumbers(3, 8)
// console.log(`the result is : ${finalResult}`);
// console.log("the result is :",finalResult,"Is is True?");

// function UserLoggedInMessege(username){
//     return `${username} Just Logged In`
// }
// const messege = UserLoggedInMessege("Ritik")
// console.log(messege)

function UserLoggedInMessege(username){
    if(username == undefined){
        console.log("Please Enter a username ")
        return 
    }
    return `${username} Just Logged In`
}
const messege = UserLoggedInMessege("Mohit")
// console.log(messege)


function CalculateCartItems(...num1){           //(... = rest operator)
    return num1
}
// console.log(CalculateCartItems(100,200,300,400,58920,645));

//                                   objects in functions

const user ={
    username : "Ritik",
    price : 499,
}

function handleObject (anyObject){
    console.log(`The Username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "Mohit",
//     price : 999
// })


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));