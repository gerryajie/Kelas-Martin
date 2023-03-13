function bintang(baris){
    let pola="";
    for (let i=0;i<baris;i++){
      for(let j=1;j<=i+1;j++){
        pola+="*"
      }
      pola +="\n"

    }
    return pola
    
}

console.log(bintang(6))

// const readline=require("readline");
// const process= require("process")
// const input=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// input.question("baris",(baris)=>{
//     let pola="";
//     for (let i=0;i<baris;i++){
//         pola +="*"
//         pola +="\n"
//     }
//     console.log(pola)
//     input.close()
// })