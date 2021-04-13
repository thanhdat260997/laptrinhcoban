// function UCLN(a,b){
//     if (a == 0 || b == 0){
//         return 0;
//     }
//     while (a != b){
//         if (a > b){
//             a -= b;
//         }else{
//             b -= a;
//         }
//     }
//     return a;
// }
// console.log(UCLN(0,24));

function UCLN(a,b){
    if (a == 0 || b == 0){
        return 0;
    }
    while (a != b){
        if (a > b){
            a -= b;
        }else{
            b -= a;
        }
    }
    return a;
}
function BCNN(a,b){
    let result = UCLN(a, b);
    return a * b / result; 
}
console.log(UCLN(2,24));
console.log(BCNN(3,25));