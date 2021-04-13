// let n = 1;
// while (n <= 10) {
//     console.log(n);
//     n = n + 1;
// }
// let n = 11 ;
// let tong = 0 ;
// while (n <= 10) {
  
//     tong = tong + n;
//     n ++;
// }
// console.log(tong);
// let n = 1 ;
// let tong = 0 ;
// do {
//     tong = tong + n;
//     n ++;
// } while(n <=10);
// console.log(tong);
// let n = x;
// let tong = 0;
// do {
//     tong = tong + x;
//     x ++;
// }
// while(tong <= 30);
// console.log(1);
// let i = 0;
// while (i < 3){
//     console.log("*");
//     i ++;
// }
// for (let i = 0; i < 3; i++ ) {
//     console.log("*");
// }
// for (let i = 0; i < 3; i++){
//     console.log("Khanh");
// }

// let students = [
    // {
//         name: 'Dats',
//         age: 25
//     },
//     {
//         name: 'Khanh',
//         age: 16
//     },
//     {
//         name: "Thao",
//         age: 24
//     },
// ]
// for (let i = 1; i < students.length; i ++){
//     console.log(students[i].name)
// }
// let tong = 0;
// let i = 0;
// while (i <= 50) {
//     if(i === 50/2) {
//         i ++;
//         continue;
//     }
//     sum += i;
//     i ++;
//     if (sum >= 125)
//         break;
// }
// int so_ND, tong = 0;
// int dem = 1;
// while (dem <= 4)
// {
// cin >> so_ND;
// if (so_ND <= 0) dem = 5;
// else {
// tong = tong + so_ND;
// dem = dem + 1;
// }
// }
// cout << tong << endl;

function ptBac2(a, b, c){
    let delta = b * b - 4 * a * c;
    if (delta == 0){
        console.log('phuong trinh co nghiem kep');
    }
    else if(delta < 0){
        console.log('phuong trinh vo nghiem');
    }
    else
    console.log('phuong trinh co 2 nghiem')
}
console.log(ptBac2(1, 4, 4));

