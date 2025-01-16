let a = 300
if (true){
    let a = 10
    const b=20
    var c = 30
    // console.log("INNER :",a);
    
}
var c = 300
// console.log(a);          not defined (this is correct) 
// console.log(b);          not defined (this is correct)
// console.log(c);          Don't show any error (not good so we don't prefer var) also th value is 
                            // updated with 300


            // Scope in Nested Functions

function one(){
    let userName = "Ritik";
    console.log("My Name is : ");
    
    function two(){
        let website = "Youtube";
        console.log(userName);
        
    }
    // console.log(website);
    
    two()
}
// one()



// console.log(addOne(5)); // it can run before initialization and after initialization
function addOne(num){
    return num + 1;
}

// console.log(addOne(5));


// console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2 
}

// console.log(addTwo(5)) // output = 7