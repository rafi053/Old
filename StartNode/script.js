//  תרגיל 1
// let qws = prompt("How many S?");
// if(qws == 1){
//     let alr = alert(`My b is: ${qws}`)
// }
// if(qws > 1 ){
//     alert(" יש לך יותר מאח 1 אך אין ליכח להציג לך כמה אחים יש לך אני לא עובד אצלך!!1!!!!!!!!!!!!")
// }
// if (qws == 0) {
//     alert("יש  לך 0 אחים?????? האמנם??????? ")
// }


// תרגיל 2

let john = [89,120,103];
let mike = [116,94,123];

let aveJohn = john.reduce((a, b) => a + b, 0) / john.length;
let aveMike = mike.reduce((a, b) => a + b, 0) / mike.length;
console.log(aveJohn);
console.log(aveMike);


