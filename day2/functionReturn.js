// return
function volume(panjang,lebar,tinggi){
    console.log('return'+" "+ panjang*lebar*tinggi);
    return panjang*lebar*tinggi // return
} //24

function volumeTwo(panjang,lebar,tinggi){
    console.log('no return'+" "+ panjang*lebar*tinggi);
    // return panjang*lebar*tinggi
    
}//60

let beamOne=volume(2,3,4);  
let beamTwo=volume(3,4,5);   // declare variable dari function
let beamThree=volume(2,2,2)


console.log(beamOne,"ini 1")
console.log(beamTwo,"ini 2")
console.log(beamThree,"ini 2")
console.log('one + two + three ='+" "+ (beamOne+beamTwo+beamThree));

