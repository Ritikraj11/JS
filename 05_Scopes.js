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


