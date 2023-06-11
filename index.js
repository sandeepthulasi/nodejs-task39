const express = require('express');
const app = express();
const fs = require('fs')
const port = 4040;

const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
let data = `DATE:${year}-${month}-${date} TIME: ${hours}:${minutes}:${seconds}`;

fs.writeFile('./date-time.txt', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("file created successfully!!!")
})

app.get('/', (req, res) => {
    res.send(data)
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})