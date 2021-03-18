
var complexityByType = function (lineArr) {

    var ctc_arr = [];

    for (i = 0; i < lineArr.length; i++) {
        var count = 0;
        if (lineArr[i].includes("if")) {
            count++;
            // console.log(count)
            if (lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[x] == '&' || ch[x] == '|') {
                        if (ch[x + 1] == '&' || ch[x] == '|') {
                            count++;
                            x++;
                        } else {
                            count++;
                        }
                    }
                }
                // console.log(count)
            }
        } else if (lineArr[i].includes("for") || lineArr[i].includes("while") || lineArr[i].includes("do")) {
            count += 2;
            // console.log(count)
            if (lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[i] == '&' || ch[i] == '|') {
                        if (ch[i + 1] == '&' || ch[i] == '|') {
                            count += 2;
                            i++;
                        } else {
                            count += 2;
                        }
                    }
                }
                // console.log(count)
            }
        } else if (lineArr[i].includes("catch")) {
            count++;

        } else if (lineArr[i].includes("switch") && lineArr[i].includes("(") && lineArr[i].includes(")")) {

            var caseCount = 0

            if (lineArr[i].includes("case"))
                caseCount++;

            var checkArr = []

            //Loop till end of programme assuming switch continue
            for (s = i; s < lineArr.length; s++) {

                var charArr = lineArr[s].split('');

                //looping through each character
                for (c = 0; c < charArr.length; c++) {

                    if (charArr[c] == '{')
                        checkArr.push('{')
                    else if (charArr[c] == '}') {
                        if (checkArr.length != 0) {
                            checkArr.pop()

                            if (checkArr.length == 0)
                                break;
                        }

                    }
                }

                if (checkArr.length == 0)
                    break;


            }

            count += caseCount;

        }

        ctc_arr.push(count)

    }

    console.log("Complexity By Type Array Length: ", ctc_arr, ctc_arr.length)
    return ctc_arr;

}

module.exports = complexityByType;