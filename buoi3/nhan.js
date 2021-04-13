// tinh tich cac so tu 1 den 10

let tich = 1;
let i = 1;
while (i === 1) {
    tich = tich * i;
    continue;
    i ++;
    if( i === 5)
        break;
    
}

// for(let i = 1; i <= 10; i++) {
//     tich = tich * i;
// }

console.log(tich);