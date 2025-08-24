
const CLIENT_ID = "7865f291";

export async function getLatestTracks(limit = 10) {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=${limit}&order=releasedate`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.results;
}
