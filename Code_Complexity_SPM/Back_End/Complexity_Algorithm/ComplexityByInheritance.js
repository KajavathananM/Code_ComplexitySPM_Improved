
var complexityByInheritance = function (lineArr) {
    //check
    //console.log("Start inheritance check");

    var ci_arr = [];
    var newCount;
    for (i = 0; i < lineArr.length; i++) {
        var count = 0;
        //
        if (lineArr[i].includes("extends")) {
            count++;

            var cp1 = ComInheritance(i, lineArr);
            newCount = cp1 + count;
            // console.log("count at " + i)
            console.log(newCount)

        }
        else if (lineArr[i].includes("catch")) {
            count++;
        } else if (lineArr[i].includes("switch")) {

            count++;

        }

        ci_arr.push(count)
    }

    //check
    // console.log("before new count");

    //final count as complexity........
    //console.log(newCount);

    //check
    //console.log("before array");

    console.log("Complexity By Inheritance Array Length: ", ci_arr, ci_arr.length)
    return ci_arr;

}

//function to calculate complexity in inheritance
function ComInheritance(num, lineArr) {

    var cp;
    for (i = num; i < lineArr.length; i++) {

        if (lineArr[i + 1].includes("extends")) {
            cp = ComInheritance(i + 1);

        }
        var mc = MethodCom(i + 1, lineArr);
        //equation to calculate total complexity due to inheritance
        var ci = cp + mc;
        return ci;
    }



}
//function to caculate method complexity
function MethodCom(n, lineArr) {

    i = n;
    var MC;
    if (lineArr[i].includes("(") || lineArr[i].includes(")")) {
        var ch = lineArr[i].split(',');
        var p = ch.length;
    }
    //
    for (i = n; i < lineArr.length; i++) {
        var count1 = 0;
        if (lineArr[i].includes("if")) {
            count1++;
            // console.log(count1)
            if (lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[x] == '&' || ch[x] == '|') {
                        if (ch[x + 1] == '&' || ch[x] == '|') {
                            count1++;
                            x++;
                        } else {
                            count1++;
                        }
                    }
                }
                // console.log(count1)
            }
        } else if (lineArr[i].includes("for") || lineArr[i].includes("while") || lineArr[i].includes("do")) {
            count1 += 2;
            //  console.log(count1)
            if (lineArr[i].includes("&") || lineArr[i].includes("|")) {
                var ch = lineArr[i].split('');
                for (x = 0; x < ch.length; x++) {
                    if (ch[i] == '&' || ch[i] == '|') {
                        if (ch[i + 1] == '&' || ch[i] == '|') {
                            count1 += 2;
                            i++;
                        } else {
                            count1 += 2;
                        }
                    }
                }
                //    console.log(count1)
            }
        } else if (lineArr[i].includes("catch")) {
            count1++;
        } else if (lineArr[i].includes("switch")) {
            count1++;

        }
        //MC is the total complexity of a method
        MC = p + count1 + 1;

    }
    // console.log("Complexity By Inheritance Array Length: ", ctc_arr, ctc_arr.length)
    return MC;
}





module.exports = complexityByInheritance;