function mang(x){
    let mang = [];
    for (let i = x.length - 1; i >= 0; i--){
        mang = mang + [x[i]];
    }
    return mang;
}
console.log(mang([2, 1, 5, 8, 6]));