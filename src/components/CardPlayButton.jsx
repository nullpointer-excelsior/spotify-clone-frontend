import { Pause, Play } from "./Player"
import { usePlayerStore } from '@/store/playerStore'
import { getPlaylistById, getSongsByAlbumId } from "@/pages/api/spotify-client"

export function CardPlayButton ({ id, size = 'small' }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const handleClick = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    const playlist = await getPlaylistById(id)
    const songs = await getSongsByAlbumId(playlist?.albumId)
    setIsPlaying(true)
    setCurrentMusic({ songs, playlist, song: songs[0] })

  }

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'


  return (
    <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  )
}