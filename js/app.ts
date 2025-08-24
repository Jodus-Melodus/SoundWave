
import { getLatestTracks } from './api.ts'

async function test() {
    const tracks = await getLatestTracks(5);
    console.log(tracks);
}

test();