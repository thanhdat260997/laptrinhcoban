function doDaiChuoi(a){
    let l = 0;
    for (let i = 0; i < a.length; i++){
        if (a.charAt(i) == ' '){
            l = l + 1;
        }
    }
    return l;
}
console.log(doDaiChuoi('fjshdfud dsjfh sdfj fdjsjh') + 1);