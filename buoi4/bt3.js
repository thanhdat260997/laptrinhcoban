function canh(a, b, c){
    if (a + b <= c || b + c <= a || a + c <= b){
        return 'khong phai tam giac';
    } else {
        let p = a + b + c;
        console.log(p);
        if (a == b == c){
            console.log('tam giac deu');
        } else if (a == b || b == c || a == c){
            console.log('tam giac can');
        }
        return 'la tam giac'
    } 
    
}
console.log(canh(4, 4, 5));