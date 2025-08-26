import { getLatestTracks, getSearch } from "./api.js";
import { renderTitle, renderTrackList } from "./ui.js";

const searchBar = document.getElementById("search-bar")
searchBar.addEventListener("input", async () => {
    const container = document.getElementById("search-results");
    const searchResults = await getSearch(searchBar.value);
    renderTrackList(searchResults, container);
    renderTitle("Search Results");
});

async function loadLatestTracks() {
    const container = document.getElementById("tracks");
    const tracks = await getLatestTracks(10);
    renderTrackList(tracks, container);
    renderTitle("Latest Tracks");
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