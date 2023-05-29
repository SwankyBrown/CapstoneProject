const express = require("express")
const path = require("path")
const app = express()


//middleware
app.use (express.json())
app.use(express.static(path.join(__dirname, '../public')))
//

const {createSong, deleteSong, getSong} = require('./controller.js')

app.get('api/songs', getSong)
app.post("/api/songs", createSong)
app.delete("/api/songs/:id", deleteSong)

















app.listen(4000, () => {
    console.log("we are up on 4000");
})