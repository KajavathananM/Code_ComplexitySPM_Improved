const express = require('express');
const app = express();
const PORT = 4000 | process.env.PORT;

const cors =require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const fileRoute = require('./route/file.route')
app.use('/admin/file',fileRoute)

app.listen(PORT,()=>{
    console.log("Server listening on port ",PORT)
})