import { playTrack } from "./player.js";

export function renderTrack(track) {
  const div = document.createElement("div");
  div.className = "track";
  div.innerHTML = `
    <img src="${track.album_image}" width="50" alt="cover">
    <span>${track.name} - ${track.artist_name}</span>
    <button>Play</button>
  `;
  div.querySelector("button")?.addEventListener("click", () => playTrack(track));
  return div;
}

export function renderTrackList(tracks, container) {
  container.innerHTML = "";
  tracks.forEach(track => container.appendChild(renderTrack(track)));
}
