// function luasPersegi(sisi){
//     console.log(sisi*sisi)
// }

// luasPersegi(5) // parameter
// luasPersegi(10)


const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function namaLengkap(namaDepan,namaBelakang){
    console.log(namaDepan+ ' ' +namaBelakang)
}

console.log('Nama Lengkap Anda \n');
rl.question('nama Depan Anda ?:',(namaDepan)=>{
    rl.question('nama Belakang Anda ?:',(namaBelakang)=>{
        namaLengkap(namaDepan,namaBelakang);

        rl.close();
    })
})

rl.on('close',()=>{
    process.exit();
})




    //  [1,2,3,6,8,9]

    //  {key:"value"}

     