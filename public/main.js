// Retrieve the necessary DOM elements
const songNameInput = document.getElementById("song-name");
const artistInput = document.getElementById("artist");
const genreInput = document.getElementById("genre");
const rankInput = document.getElementById("rank");
const songFileInput = document.getElementById("song-file");
const addSongButton = document.getElementById("add-song");
const songDisplaySection = document.getElementById("song-display");
const deleteBtn = document.getElementById("delete-btn")
const form = document.querySelector("form")
// Store the songs in an array

const baseUrl = "/api/songs"


const errCallback = err => alert(err.response.data);
const getAllSongs = () => axios.get(baseUrl).then(songsCallback).catch(errCallback)
const songsCallback = ({ data: songs }) => songDisplay(songs)
const deleteSong = id => axios.delete(`${baseUrl}/${id}`).then(songsCallback).catch(errCallback)
// Event listener for the add song button
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  // Event listener for the Delete song button
  
  
  
  // Retrieve the values from the input fields
  const songName = songNameInput.value;
  const artist = artistInput.value;
  const genre = genreInput.value;
  const rank = rankInput.value;
  const songFile = songFileInput.files[0];
  
  // Check if any field is empty or set to default values
  if (
    songName.trim() === "" ||
    artist.trim() === "" ||
    genre === "Genre" ||
    rank === "Rank"
    ) {
      alert("Please fill in all the fields and select an MP3 file.");
      return;
    }
    
    // Check if the rank already exists
    
    // Create a new song object
    const newSong = {
      songName,
      artist,
      genre,
      rank,
      songFile
    };
    
  // Add the new song to the songs array
  axios.post(baseUrl, newSong).then(songsCallback).catch(errCallback)
  
  // Clear the input fields
  songNameInput.value = "";
  artistInput.value = "";
  genreInput.value = "Genre";
  rankInput.value = "Rank";
  songFileInput.value = "";
});

function createSongElement(song) {
  const songElement = document.createElement("div");
  songElement.classList.add("song");
  songElement.innerHTML = `
  <h4>${song.songName}</h4>
  <p>Artist: ${song.artist}</p>
  <p>Genre: ${song.genre}</p>
  <p>Rank: ${song.rank}</p>
  <button id="delete-btn" onclick="deleteSong(${song.id})">Delete Song</button>
  `;
  // <audio controls>
  // <source src="${URL.createObjectURL(song.songFile)}" type="audio/mpeg">
  // </audio>
  
  songDisplaySection.appendChild(songElement);
}



function songDisplay(arr) {
  songDisplaySection.innerHTML = ""
  for (let i = 0; i < arr.length; i++) {
    createSongElement(arr[i])
  }
}

form.addEventListener("submit", submitHandler)

getAllSongs()







