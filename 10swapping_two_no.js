var a = 10;
var b = 20;
var temp;
console.log('Before swapping a=%d,b=%d', a, b);
temp = a;
a = b;
b = temp;
console.log('\n After swapping a=%d,b=%d', a, b);

/////////////////////////////////////////////////////

// function swapNumbers(a, b) {
//     var temp;
//     // console.log('Before swapping a=%d, b=%d', a, b);
//     temp = a;
//     a = b;
//     b = temp;
//     console.log('After swapping a=%d, b=%d', a, b);
// }


// var num1 = 10;
// var num2 = 20;

// swapNumbers(num1, num2);

function swapping(aa, bb) {
    var temp;
    temp = aa;
    aa = bb;
    bb = temp;
    console.log(aa, bb)
}

swapping(50, 100)