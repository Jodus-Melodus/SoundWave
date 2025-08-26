import { playTrack } from "./player.js";

export function renderTrack(track) {
  const div = document.createElement("div");
  div.className = "track";
  div.innerHTML = `
    <button>▶</button>
    <img src="${track.album_image}">
    <span>${track.name} - ${track.artist_name}</span>
  `;
  div.querySelector("button")?.addEventListener("click", () => playTrack(track));
  return div;
}

export function renderTrackList(tracks, container) {
  container.innerHTML = "";
  tracks.forEach(track => container.appendChild(renderTrack(track)));
}

export function renderTitle(title) {
  const titleHeader = document.getElementById("page-title");
  titleHeader.innerHTML = title
}