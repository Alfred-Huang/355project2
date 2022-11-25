const path  = require('path')
const express = require('express')
const bodyParser = require("body-parser");
const fs = require('fs')
const app = express();

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname , '/public/html/main.html'))
})

app.post("/api/appointment-form", function (req, res){
   fs.readFile('public/data/appointmentForm.json', 'utf8', (err, data) =>{
       if (err) {
           console.log(`Error reading file from disk: ${err}`)
       } else {
           // parse JSON string to JSON object
           const formData = JSON.parse(data)
           let keysList = Object.keys(formData);
           let max = keysList[keysList.length - 1];
           setTheData(Number.parseInt(max) + 1, req.body, formData);
       }
   })

    fs.writeFile('public/data/appointmentForm.json', JSON.stringify(getTheData(), null, 2), 'utf8' , (err) => {
        if (err) {
            console.log(err);
        }else{
            res.sendStatus(200)
        }
    });
})

app.post("/api/feedback-form", function (req, res){
    fs.appendFile("public/data/feedback.txt", JSON.stringify(req.body, null, 2), (err) => {
        if (err) {
            console.log(err);
        }else {
            res.sendStatus(200)
        }
    })
})

let data;
function setTheData(idx, curData, formData){
    formData[idx] = curData
   data = formData
    console.log(data)
}

function getTheData(){
    return data;
}

app.listen(8080)
