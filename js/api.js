
const CLIENT_ID = "7865f291";

export async function getLatestTracks(limit = 10) {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=10&order=releasedate&desc=true`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}