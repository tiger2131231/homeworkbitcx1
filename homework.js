// bài 1
// function titleCase(string) {
//     let a = string.toLowerCase().split(" ");
//     for(var i = 0; i< a.length; i++){
//         a[i] = a[i][0].toUpperCase() + a[i].slice(1);
//     }
//     return a.join(" ");
//     }
// let c = titleCase('vu phong thai');
// console.log(c)
// bài 2
// let a = '       Doraemon and Dorami are brother              '
// console.log(a.replace(/a/g,"4").replace(/e/g,"3").replace(/i/g,"1").replace(/o/g,"0").replace(/s/g,"5").trimEnd().trimStart())
// bài 3
function checkString(str) {
    if (str.length >= 3 && str.slice(-3) !== 'ing') {
    console.log(`${str}ing`);
    } else if (str.slice(-3) === 'ing') {
    console.log(`${str}ly`);
    } else if (str.length < 3) {
    console.log(str);
    }
    }
    checkString('i am king zing.mp3');