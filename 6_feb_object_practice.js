let k = {
    "key-1": {
        "nested-key-1": "nested-value",
        "nested-key-2": "nested-value-2"
    },
    "key-2": "d",
    "key-3": 3,

    "key-4": [
        {
            "laptop": "asusViviobook",
            "book": "story book"
        }
    ]
}
for (let key in k["key-4"]) {
    console.log(k["key-4"][0]["laptop"]);
    console.log(key, ":", k["key-4"][key])

}





// for (let key in k["key-1"]) {
//     console.log("key-1 in key :", key);

// }
// for (let key in k["key-1"]) {
//     console.log(key, ":", k["key-1"][key]);

// }
// for (let key in k) {
//     if (key === "key-2") {
//         console.log("key is ", key, "value is  string:-", k[key]);
//     }
//     else if (key === "key-3") {
//         console.log("key is", key, "value is number :-", k[key]);
//     }


// }






// console.log("Key is key-1,Value is object so we are printing the keys inside the object");
// console.log("\n");

// for (let key in k["key-1"]) {

//     console.log("key-1 in keys : ", key);
// }
// console.log("\n");
// for (let key in k["key-1"]) {

//     console.log(key, ": ", k["key-1"][key]);
// }
// console.log("\n");

// for (let key in k) {

//     if (key === "key-2") {

//         console.log("key is", key, "Value is string =>", k[key]);
//     } else if (key === "key-3") {

//         console.log("key is", key, "Value is Number =>", k[key]);
//     }
// }
// console.log("\n");


