let a = {
    'b': 10, 'c': 12, 'd': 100, 'e': 'abc'
}
console.log(a['b']);
console.log(a['e']);
console.log(a['g']);
console.log(a['c']);
let n = 'c';
console.log(n);
console.log(a[n]);
console.log(a['c']);
console.log(a);
let shantuli = 'd';
console.log(a[shantuli]);


// const arr = ["shantuli", "manavi", "dhale", "kavita"];
// const resutl = arr.values();
// for (const value of result)
//     console.log(value);


// const arr = ["shantuli", "manavi", "dhale", "kavita"];
// for (const value of arr)
//     console.log(value);
const arr1 = ['1', '2', '3', '4', '5'];
for (const value of arr1)
    console.log(value)
//////////////////////
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
    d: "shantuli"
};

console.log(Object.values(object1));
console.log(Object);
