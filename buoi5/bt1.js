function mang(x){
    let tong = 0;
    for (let i = 0; i < x.length; i++){
        tong = tong + x[i];
    }
    return (tong / x.length);
}
console.log(mang([1, 2, 3, 4]));