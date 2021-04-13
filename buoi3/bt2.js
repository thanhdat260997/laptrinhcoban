// function nguyenTo(x){
//     let i = 2;
//     while (i <= x - 1){
//         if (x % i == 0){
//             return false;
//         }
//         i++;
//     }
//     return true;
// }
// console.log(nguyenTo(9));
function nguyenTo(x){
    for (let i = 2; i <= x - 1; i++){
        if (x % i == 0){
            return false;
        }
    }
    return true;
}
console.log(nguyenTo(5));