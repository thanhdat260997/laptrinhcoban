// function mang(x){
//     let imax = 0;
//     for (let i = 1; i < x.length; i++){
//         if(x[imax] < x[i]){
//             imax = i;
//         }
//     }
//     return imax;
// }
// console.log(mang([5, 4, 6, 8, 9]));
function mang(x){
    let max = x[0];
    for (let i = 1; i < x.length; i++){
        if(max < x[i]){
            max = x[i];
        }
    }
    return max;
}
console.log(mang([5, 4, 6, 8, 9]));