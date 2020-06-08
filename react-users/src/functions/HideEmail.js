const hideEmail = (input) => {
    let domain = "";
    let userName = "";
    let count = false;
    let firstStr = "";
    let middleStr = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== "@" && count === false) {
            userName += input[i];
        }
        if (input[i] === "@" || count) {
            count = true;
            domain += input[i]
        }
    }
    for (var k = 0; k < userName.length; k++) {
        if (k < 3) {
            firstStr += userName[k];
        }
        if (k + 3 === userName.length || k + 2 === userName.length || k + 1 === userName.length) {
            middleStr += userName[k];
        }
    }
    return `${firstStr}...${middleStr}${domain}`;
}

export { hideEmail };