
var complexityByNested = function (lineArr) {

    var ctc_arr = [];


    for (i = 0; i < lineArr.length; i++) {
        var count = 0;


        if (lineArr[i].includes("if")) {
            count++;
            // console.log(count)

            if (lineArr[i].includes("if") || lineArr[i].includes("for")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[x] == '{') {
                        count++;
                        x++;
                    }
                    else if (ch[x] == '}') {
                        if (count > 0) {
                            --count;
                        }
                        else {
                            count;
                        }
                    }
                }
                // console.log(count)
            }
        }

        else if (lineArr[i].includes("for")) {
            count++;
            // console.log(count)

            if (lineArr[i].includes("if") || lineArr[i].includes("for")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[x] == '{') {
                        count++;
                        x++;
                    }
                    else if (ch[x] == '}') {
                        if (count > 0) {
                            --count;
                        }
                        else {
                            count;
                        }
                    }
                }
                // console.log(count)
            }
        }

        else if (lineArr[i].includes("else")) {
            {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[x] == '{') {
                        count++;
                        x++;
                    }
                    else if (ch[x] == '}') {
                        if (count > 0) {
                            --count;
                        }
                        else {
                            count;
                        }
                    }
                }
                // console.log(count)
            }
        }
        ctc_arr.push(count)

    }

    console.log("Complexity By Nested Array Length: ", ctc_arr, ctc_arr.length)
    console.log("\n")
    return ctc_arr;

}

module.exports = complexityByNested;