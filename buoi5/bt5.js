function mang(x){
    let s = '';
    for(let i = x.length - 1; i >= 0; i--){
        s = s + x[i].toString();
    }
    console.log(s);
}
mang([2, 1, 5, 8, 6]);