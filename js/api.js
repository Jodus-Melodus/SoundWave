
const CLIENT_ID = "7865f291";

async function getResponse(url = "") {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export async function getLatestTracks(limit = 10) {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=${limit}&order=releasedate`;
    return await getResponse(url)
}

export async function getSearch(search = "", limit = 10) {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=${limit}&search=${search}`;
    return await getResponse(url)
}