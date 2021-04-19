// function mangDiem(diem){
//     let imin = 0;
//     for (let i = 1; i < diem.length; i++){
//         if (diem[imin] > diem[i]){
//             imin = i;
//         }
//     }
//     return imin;
// }
// console.log(mangDiem([6, 1, 8, 0, 2]));
function mangDiem(x){
    let min = x[0];
    for (let i = 0; i < x.length; i++){
        if (min > x[i]){
            min = x[i];
        }
    }
    return min;
}
console.log(mangDiem([6, 1, 8, 0, 2]));