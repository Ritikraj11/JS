// Immediately Invoked Function Expression 

(function chai(){       // Named functions 
    console.log(`DB Connected`);
})() ; // semicolon is used to run two or more code continuosly

// IIFE is used to protect function from global pollution 
// Also it is used to immediate invoke of function

(()=>{
    console.log(`DB Connected Two`);
    
}) ()