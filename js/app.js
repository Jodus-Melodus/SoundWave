import { getLatestTracks, getSearch } from "./api.js";
import { renderTitle, renderTrackList } from "./ui.js";

// Event listeners
const menuHome = document.getElementById("goto-home");
menuHome.addEventListener("click", loadLatestTracks);

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", () => loadSearch(searchBar.value));

async function loadLatestTracks() {
    console.log("Click");
    const container = document.getElementById("tracks");
    const tracks = await getLatestTracks(10);
    renderTrackList(tracks, container);
    renderTitle("Latest Tracks");
}

async function loadSearch(searchText) {
    const container = document.getElementById("search-results");
    const searchResults = await getSearch(searchText);
    renderTrackList(searchResults, container);
    renderTitle("Search Results");
}

export function updateTab(url, trackName) {
    let link = document.querySelector("#favicon");

    if (!link) {
        link = document.createElement("link");
        link.id = "favicon";
        link.rel = "icon";
        document.head.appendChild(link);
    }

    let title = document.querySelector("#title");

    if (!title) {
        title = document.createElement("title");
        title.id = "title";
        document.head.appendChild(title);
    }

    link.href = url;
    title.innerHTML = trackName
}