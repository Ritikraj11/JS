const user = {
    username : "Ritik",
    price : 999,
    welcomeMessege : function(){
        // console.log(`${username}, Welcome to the Website`) // Error: username is not defined
        console.log(`${this.username} , Welcome to this website`);
        // console.log(this);
        
    }

}

// user.welcomeMessege() //Ritiṇk , Welcome to this website
// user.username = "Shanu"
// user.welcomeMessege() //Shanu , Welcome to this website

// console.log(this);  // {}  // =======> This differ in brower and other editor




// function chai(){
//     let username = "Ritik"
//     console.log(this.username)  // Undefined ==> Doesn't work in function
//     console.log(this);          // it will give many values ****** Run and check
    
// }
// chai()



// const chai = function(){
//     username = "Ritik"   // same output
//     console.log(this.username);
//     console.log(this);

// }
// chai()

            // ****************** Arrow function **************
// const chai = () => {
//     username = "Ritik"
//     console.log(this); // This gives Empty parenthesis
// }
// chai()


        // Basic Syntex 
// const addTwo = (num1 , num2) => {
//     return num1 + num2 
// }


                // Implicit Function

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(2,5));
