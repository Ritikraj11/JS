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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const myFunc = function(){
    console.log("hello")
}

// ****************Day 2 ***************************\\
// const tinderUser = new Object() ==> for singleton 

const tinderUser = {} // ==> output : {}

tinderUser.id= "123abc"
tinderUser.email = "ritik@gmail.com"
tinderUser.isLoggedIn = false 
// console.log(tinderUser);

const regularUser = {                // Nested object
    email : "ritik@microsoft",
    fullName : {
        UserFullName : {
            firstName : "Ritik",
            LastName  :"Raj"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.UserFullName.LastName);

const obj1 = {1 : "a", 2:"b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1,obj2}
// console.log(obj3);  // output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3) ==> //output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 ={...obj1, ...obj2,...obj4}
// console.log(obj3)

const course = {
    courseName : "js ",
    coursePrice : "999",
    courseInstructoer : "ritik"
}

course.courseInstructoer

const {courseInstructoer:instructor} = course // acess by a unique name given by developer
// console.log(instructor)