import { type Playlist, type Song } from "@/lib/data";

type HomeLibrary = {
    playlists: Playlist[];
    songs: Song[];
}

export async function getHomeLibrary(): Promise<HomeLibrary> {
    const url = import.meta.env.PUBLIC_SPOTIFY_CLONE_BACKEND_URL
    try {
        const response = await fetch(`${url}/home-library`);
        return response.json();
    } catch (error: any) {
        return { playlists: [], songs: [] };
    }
}

export async function getPlaylists(): Promise<Playlist[]> {
    return getHomeLibrary().then((library) => library.playlists);
}

export async function getPlaylistById(id: string): Promise<Playlist | undefined> {
    return getPlaylists().then((playlists) => playlists.find((playlist: Playlist) => playlist.id === id));
}

export async function getSongs(): Promise<Song[]> {
    return getHomeLibrary().then(({ songs }) => songs);
}

export async function getSongsByAlbumId(id: string): Promise<Song[]> {
    return getSongs().then((songs) => songs.filter((song: any) => song.albumId === id));
}