// ************************************ Objects *******************************************\\

// singleton ==> object created by Object.create

// object lateral

const mySym = Symbol("key1")

const JsUser = {
    name : "Ritik",
    fullName : "Ritik Raj",
    [mySym]: "my key",
    email : "ritik@google.com",
    age : 18 ,
    location : "Bihar",
    isLoggedIn : false ,
    lastLoggedIn : ["mondyay", "saturday"]
}

// object acess

// console.log(JsUser.fullName);
// console.log(JsUser["name"]);
// console.log( JsUser["mySym"])
// console.log(JsUser)

// JsUser.email = "ritik@microsoft.com"

// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.email = "ritik@byjus.com"
// console.log(JsUser)

// Object.freeze(JsUser.age) // this doesn't work
// JsUser.age= 25
// JsUser.email = "ritik@ibm.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());