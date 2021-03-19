const express = require('express');
const router = express.Router();
const fs = require('fs');
const prettier = require("prettier");

const complexityByType = require('../Complexity_Algorithm/ComplexityByType')
const complexityBySize = require('../Complexity_Algorithm/ComplexityBySize').Cs_Size
const ComplexityByNested = require('../Complexity_Algorithm/ComplexityByNested')
const ComplexityByInheritance = require('../Complexity_Algorithm/ComplexityByInheritance')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './public/files/')
    }
});

const upload = multer({ storage: storage });

//Create a new Course
router.post("/uploadfile", upload.single("file"), function (req, res, next) {

    // console.log(req.file)

    //data contains buffer type
    var data = fs.readFileSync(req.file.path);
    // console.log(data)

    //currentData contains string data
    var currentData = data.toString();
    // console.log(currentData)

    //Indentating properly using Prettier
    const formattedText = prettier.format(currentData, {
        parser: "java",
        tabWidth: 2
    });

    //Each line into array
    var lineArr = formattedText.split(/(?:\r\n|\r|\n)/g);

    let CSvalues= complexityBySize(lineArr)
    let cs = CSvalues[0]
    let cr = CSvalues[1]
    let ctc = complexityByType(lineArr)
    let cnc = ComplexityByNested(lineArr)
    let ci = ComplexityByInheritance(lineArr)

    // console.log(complexityByType(lineArr) )

    res.send({ id: "Added", content: formattedText, cs, ctc, cnc, ci ,cr});
})


module.exports = router;