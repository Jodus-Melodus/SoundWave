import { getLatestTracks } from "./api.js";
import { renderTrackList } from "./ui.js";

async function loadHome() {
    const container = document.getElementById("tracks");
    if (container) {
        const tracks = await getLatestTracks(10);
        renderTrackList(tracks, container);
    } else {
        container.innerHTML = "<p>Error loading tracks</p>";
        console.error(err);
    }
}

loadHome();
