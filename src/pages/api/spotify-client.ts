import { SPOTIFY_CLONE_URL } from "@/lib/constants";

export async function getHomeLibrary() {
    const response = await fetch(`${SPOTIFY_CLONE_URL}/home-library`);
    return await response.json();
}

export async function getPlaylists() {
    return getHomeLibrary().then(({ playlists }) => playlists);
}

export async function getPlaylistById(id: string) {
    return getPlaylists().then((playlists) => playlists.find((playlist: any) => playlist.id === id));
}

export async function getSongs() {
    return getHomeLibrary().then(({ songs }) => songs);
}

export async function getSongsByAlbumId(id: string) {
    return getSongs().then((songs) => songs.filter((song: any) => song.albumId === id));
}