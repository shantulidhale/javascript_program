// var a = 90;
// var b = 80;
// var c = 95;
// var total;
// total = a + b + c;
// average = total / 3;
// console.log(total);
// console.log(average);



function Average(num1, num2, num3, num4) {
    var total = num1 + num2 + num3 + num4;
    var average = total / 3;
    return average;
}
var num1 = 50;
var num2 = 60;
var num3 = 80;
var num4 = 90;
var result = Average(num1, num2, num3, num4);
console.log(result);