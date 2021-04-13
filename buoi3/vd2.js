function tinhtong (x) {
    let tong = 0;
    let i = x;
    do {
        tong = tong + i;
        i ++;
    } while (tong <= 30);
    console.log(tong);
    return tong;
}

tinhtong(31);