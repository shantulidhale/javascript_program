function asending_order(a, b, c) {
    if ((a >= b) && (a >= c)) {
        if (b >= c) {
            console.log("Descending order is  ", a, b, c);
            console.log("Ascending order is   ", c, b, a);
        }
        else {
            console.log("Descending order is  ", a, c, b);
            console.log("Ascending order is   ", b, c, a);
        }
    }
    else if ((b >= a) && (b >= c)) {
        if (a >= c) {
            console.log("Descending order is ", b, a, c);
            console.log("Ascending order is ", c, a, b);
        }
        else {
            console.log("Descending order is ", b, c, a);
            console.log("Ascending order is ", a, c, b);
        }
    }
    else if ((c >= a) && (c >= b)) {
        if (a >= b) {
            console.log("Descending order is", c, a, b);
            console.log("Ascending order is ", b, a, c);
        }
        else {
            console.log("Descending order is ", c, b, a);
            console.log("Ascending order is ", a, b, c);
        }
    }

}
asending_order(5, 45, 2);




