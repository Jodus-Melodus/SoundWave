import { updateTab } from "./app.js";

const audioPlayer = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("now-playing");
const player = document.getElementById("player");
const playerContainer = document.getElementById("player-container");

export function playTrack(track) {
    if ((track.image) && (track.name)) {
        updateTab(track.image, track.name);
    }

    let img = document.getElementById("player-track-cover");
    if (!img) {
        img = document.createElement("img")
        img.alt = "track cover";
        img.id = "player-track-cover"
        img.className = "player-track-cover"
        playerContainer.prepend(img);
    }

    img.src = track.image;

    audioPlayer.src = track.audio;
    audioPlayer.play();
    nowPlaying.textContent = `Now Playing: ${track.name} - ${track.artist_name}`;
}
