import { updateTab } from "./app.js";

const audioPlayer = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("now-playing");

export function playTrack(track) {
    if ((track.image) && (track.name)) {
        updateTab(track.image, track.name);
    }

    audioPlayer.src = track.audio;
    audioPlayer.play();
    nowPlaying.textContent = `Now Playing: ${track.name} - ${track.artist_name}`;
}
