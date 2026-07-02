import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ListMusic,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  StepBack,
  StepForward,
  Volume2,
  VolumeX,
} from 'lucide-react'
import songOne from '../../assets/songs/6up 5oh Cop-Out (Pro  Con).mp3'
import songTwo from "../../assets/songs/Against the Kitchen Floor.mp3"
import songThree from "../../assets/songs/Hand Me My Shovel, I'm Going In!.mp3"
import songFour from '../../assets/songs/Outliars and Hyppocrates_ a fun fact about apples.mp3'
import songFive from '../../assets/songs/The Main Character.mp3'

const songs = [
  { title: '6up 5oh Cop-Out (Pro / Con)', src: songOne },
  { title: 'Against the Kitchen Floor', src: songTwo },
  { title: "Hand Me My Shovel, I'm Going In!", src: songThree },
  { title: 'Outliars and Hyppocrates', src: songFour },
  { title: 'The Main Character', src: songFive },
]

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return '0:00'
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.35)
  const [isMuted, setIsMuted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const currentSong = useMemo(() => songs[currentIndex], [currentIndex])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = isMuted
  }, [volume, isMuted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const syncTime = () => setCurrentTime(audio.currentTime)
    const syncDuration = () => setDuration(audio.duration || 0)
    const handleEnded = () => {
      setCurrentIndex((value) => (value + 1) % songs.length)
    }

    audio.addEventListener('timeupdate', syncTime)
    audio.addEventListener('loadedmetadata', syncDuration)
    audio.addEventListener('durationchange', syncDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', syncTime)
      audio.removeEventListener('loadedmetadata', syncDuration)
      audio.removeEventListener('durationchange', syncDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.src = currentSong.src
    audio.load()

    if (isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }, [currentSong, isPlaying])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const changeTrack = (direction: 'next' | 'previous') => {
    setCurrentIndex((value) => {
      if (direction === 'next') {
        return (value + 1) % songs.length
      }
      return (value - 1 + songs.length) % songs.length
    })
  }

  const jumpTime = (seconds: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds))
  }

  const onSeek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  const onVolume = (value: number) => {
    setVolume(value)
    setIsMuted(value === 0)
  }

  return (
    <>
      <audio ref={audioRef} preload="metadata" />
      <div className="fixed bottom-4 right-4 z-40 w-[min(92vw,26rem)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-parchment/15 bg-black/80 shadow-paper backdrop-blur-xl">
          <div className="border-b border-parchment/10 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold/80">Background player</p>
                <p className="truncate pt-1 text-sm font-semibold text-parchment">{currentSong.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment/12 bg-white/5 text-parchment transition hover:border-gold/35 hover:text-gold"
                aria-label={isOpen ? 'Hide playlist' : 'Show playlist'}
              >
                <ListMusic className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="px-4 pb-4 pt-3">
            <div className="flex items-center justify-center gap-4 pb-4">
              <button
                type="button"
                onClick={() => changeTrack('previous')}
                className="player-icon-button"
                aria-label="Previous song"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => jumpTime(-10)}
                className="player-icon-button"
                aria-label="Back 10 seconds"
              >
                <StepBack className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={togglePlayback}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-parchment text-ink transition hover:scale-[1.03]"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="h-7 w-7" /> : <Play className="ml-1 h-7 w-7" />}
              </button>
              <button
                type="button"
                onClick={() => jumpTime(10)}
                className="player-icon-button"
                aria-label="Forward 10 seconds"
              >
                <StepForward className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => changeTrack('next')}
                className="player-icon-button"
                aria-label="Next song"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-mist/78">
              <span className="w-11 shrink-0 tabular-nums">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => onSeek(Number(event.target.value))}
                className="player-range"
                aria-label="Seek track"
              />
              <span className="w-11 shrink-0 text-right tabular-nums">{formatTime(duration)}</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMuted((value) => !value)}
                className="player-icon-button"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(event) => onVolume(Number(event.target.value))}
                className="player-range"
                aria-label="Volume"
              />
              <span className="w-12 text-right text-xs uppercase tracking-[0.2em] text-gold/72">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

            {isOpen ? (
              <div className="mt-4 border-t border-parchment/10 pt-4">
                <div className="space-y-2">
                  {songs.map((song, index) => (
                    <button
                      key={song.title}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left transition ${
                        index === currentIndex
                          ? 'bg-gold/16 text-parchment'
                          : 'bg-white/[0.03] text-mist/74 hover:bg-white/[0.07] hover:text-parchment'
                      }`}
                    >
                      <span className="pr-4 text-sm">{song.title}</span>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gold/70">
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
