// function so(a){
//     let b = a.toString();
//     console.log(b.reverse());
// }
// so(123);
function so(s){
    let s2 = s.toString();
    let x = '';
    let l = s2.length;
    for (let i = l - 1; i >= 0; i--){
        x = x + s2.charAt(i);
    }
    console.log(x);

}
so(123);