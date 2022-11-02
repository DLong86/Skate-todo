const express = require("express")
const path = require('path')
const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + 'public')
    res.send()
})

app.listen(port, (err) => {
    if(err) console.error(err);
    console.log(`Server running on port: ${port}`);
})