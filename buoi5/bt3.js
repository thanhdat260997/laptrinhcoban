// function mang(x){
//     let tong = 0;
//     for(let i = 0; i < x.length; i++){
//         if(x[i] % 2 == 0){
//             tong = tong + x[i];
//         }
//     }
//     return tong;
// }
// console.log(mang([2, 1, 5, 8, 6]));
function mang(x){
    let tong = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 == 1){
            tong = tong + x[i];
        }
    }
    return tong;
}
console.log(mang([2, 1, 5, 8, 6]));