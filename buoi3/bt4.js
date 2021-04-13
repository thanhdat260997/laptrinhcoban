// function min(x, y){
//     if(x > y){
//         return y;
//     } else
//         return x;
    
// }
// function uocChung(x, y){
//     let i = 1;
//     let m = min(x, y);
//     while (i <= m ){
//         if(x % i === 0 && y % i === 0){
//             console.log(i);
//         }
//         i++;
//     }
// }
// uocChung(10, 15);
// function min(x, y){
//     if(x > y){
//         return y;
//     } else
//         return x;
    
// }
function uocChung(x, y){
    let m = min (x, y);
    for (let i = 1; i <= m, i++ ) {
        if(x % i === 0 && y % i === 0) {
            console.log(i);
        }    
    }
}
uocChung(10, 15);