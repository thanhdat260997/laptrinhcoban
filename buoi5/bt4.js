function mang(x){
    let dem = 0;
    for (let i = 0; i <x.length; i++){
        if(x[i] % 2 == 1){
            dem = dem + 1;
        }
    }
    return dem;
}
console.log(mang([2, 1, 5, 8, 6]));