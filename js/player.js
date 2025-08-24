

const audioPlayer = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("now-playing");

export function playTrack(track) {
    audioPlayer.src = track.audio;
    audioPlayer.play();
    nowPlaying.textContent = `Now Playing: ${track.name} - ${track.artist_name}`;
}
