
import { getLatestTracks } from './api.js'

async function test() {
    const tracks = await getLatestTracks(5);
    console.log(tracks);
}

test();