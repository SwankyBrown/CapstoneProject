const songs = require("./songs.json")
let currId = 2
module.exports = {
getSong: (req,res) => {
res.status(200).send(songs)
},


createSong: (req,res) => {
 let {songName, artist, rank, genre, songFile} = req.body
 const existingSong = songs.find(song => song.rank === +rank);
 if (!songName || !artist || !rank || !genre) {
    res.status(404).send("Please fill in all the fields and select an MP3 file.")
 } else if (existingSong){
    res.status(404).send("A song with the same rank already exists. Please choose a different rank.");
    
  
 }
 else {
    let song = {
        id: currId,
        rank: +rank,
        songName,
        artist,
        genre,
        songFile
    }
    songs.push(song)
    songs.sort((a, b) => a.rank - b.rank)
    currId++
    res.status(200).send(songs)
 }
},

deleteSong: (req,res) => {
let { id } = req.params

let index = songs.findIndex(song => +song.id === +id)

songs.splice(index,1)

res.status(200).send(songs)
}


}

