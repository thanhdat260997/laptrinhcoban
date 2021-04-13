let tong = 0;
let i = 1;

while (i <= 100) {
    
    if (tong > 50) {
        console.log(i);
        break;
    }

    if(i % 2 === 1) {
        tong = tong + i;
    }
    
    i ++;
}

console.log(tong)