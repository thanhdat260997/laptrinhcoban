function thang(n){
    if (n > 12){
        console.log('thang khong hop le');
    } else if (n == 2){
        console.log(`thang ${n} co 29 ngay`);
    } else if (n == 4 || n == 6 || n == 9 || n == 11) {
        console.log(`sthang  ${n} co 30 ngay`);
    } else
        console.log(`thang  ${n} co 31 ngay`)
}
thang(8);
thang(6);
thang(13);