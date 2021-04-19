// function mang(x){
//     let tong = 0;
//     for(let i = 0; i < x.length; i++){
//         tong = tong + x[i]
//     }
//     return tong / x.length;
// }
// console.log(mang([6, 5, 2, 7, 9]));
// function mang(x){
//     let imax = 0;
//     for (let i = 1; i < x.length; i++){
//         if(x[imax] < x[i]){
//             imax = i;
//         }
//     }
//     return imax;
// }
// console.log(mang([6, 5, 2, 7, 9]));
// function mang(x){
//     let tong = 0;
//     for (let i = 0; i < x.length; i++){
//         if (x[i] % 2 == 0){
//             tong = tong + x[i];
//         }
//     }
//     return tong;
// }
// console.log(mang([6, 5, 2, 7, 9]));
// function mang(x){
//     let tong = 0;
//     for (let i = 0; i < x.length; i++){
//         if(x[i] % 2 == 1){
//             tong = tong + 1;
//         }
//     }
//     return tong;
// }
// console.log(mang([6, 5, 2, 7, 9]))
// function mang(x){
//     let rong = '';
//     for (let i = x.length - 1; i >= 0; i--){
//         rong = rong + x[i].toString();
//     }
//     return rong;
// }
// console.log(mang([6, 5, 2, 7, 9]));
function ham(a, b){
    if(a == 0 || b == 0){
        return 0;
    }
    for(let i = 2; i <= a -1 && i <= b - 1 && a != b; i++){
        if(a % i === 0 && b % i === 0){
            return false;
        }        
    }
    return true;
}
console.log(ham([6, 17]));
