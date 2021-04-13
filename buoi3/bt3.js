// function tongLe (x) {
//     let tong = 0;
//     let i = 1;

//     while (i <= x){

//         if (i % 2 == 1){
//             tong = tong + i;
//         }
//         i++;
//     }
//     return tong;
// }
// console.log(tongLe(10));
// function tichChan(x){
//     let tich = 1;
//     let i = 2;
//     while (i <= x){
//         if (i % 2 == 0){
//             tich = tich * i;
//         }
//         i ++;
//     }
//     return tich;
// }
// console.log(tichChan(4));
// function tongLe (x){
//     let tong = 0;
//     for (let i = 1; i <= x; i++){
//         if (i % 2 == 1){
//             tong = tong + i;
        
//         }
//         i ++;
//     }
//     return tong;
// }
// console.log(tongLe(10));
function tichChan (x){
    let tich = 1;
    for (let i = 2; i <= x; i++){
        if (i % 2 == 0){
            tich = tich * i;

        }
        i ++;
    }
    return tich;
}
console.log(tichChan(4));