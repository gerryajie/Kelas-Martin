let a=1;
let b=2;
let c=1;
let d=2;

// true and true = true
// true and false = false

// true or true=true
// true or false=true



if(a===b && c===d){
    console.log("ab itu sama dan cd itu sama")
}else if(a===b && c!==d){
    console.log("ab sama dan cd itu tidak sama")
}else if (a!==b && c===d){
    console.log("ab tidak sama dan cd itu  sama")
}else{
    console.log("ab tidak sama dan cd tidak sama")
}