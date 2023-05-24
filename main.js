let songArr = []
// const volumeSlider = document.getElementById('volume-slider');
// volume.addEventListener("mousemove", setVolume)

// function setVolume(){
//     audio.volume = volume.value / 100;
// }


// volumeSlider.addEventListener('input', function() {
//     const volume = parseFloat(this.value) / 100;
// })



// // submit buttons

const submitSongViaEntryField = document.getElementById("add-song")
submitSongViaEntryField.addEventListener("click", addSongToArray);
// const submitSongViaSpotifyLink = document.getElementById("Mp3-file-add")

// //input fields 

// const songName = document.getElementById('song-name')
// const artistName = document.getElementById('artist')

// //select boxs 

// const genre = document.getElementById('genre')
// const rank = document.getElementById('rank')


// functions for functionality
/////add song/////

function addSongToArray(){
    const songInput = document.getElementById("add-song")
    const song = songInput.value
    songArr.push(song)
    songInput.value = ""
    
}

  console.log(songArr);
