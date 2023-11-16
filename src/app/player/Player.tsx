'use client'

import { Button, Container, ThemeProvider } from '@mui/material'
import Controls from './Controls'
import { useRef, useState } from 'react'
import DisplayTrack from './DisplayTrack'
import { theme } from '../theme'

const harryPoter = {
  name: `Harry Potter and the Philosopher's Stone`,
  author: 'J.K. Rowling',
  path: 'harry_potter_1',
  ext: 'm4b',
}

const lotr = {
  name: `The Lord of the Rings - The Two Towers`,
  author: 'J.R.R Tolkien',
  path: 'LOTR_2',
  ext: 'mp3',
}

const audiobook = {
  // ...harryPoter,
  ...lotr,
  chapter: 1,
  numberOfChapters: 2,
  thumbnail: '',
  start: 0,
}

const Player = () => {
  const { path, chapter, ext, name, start, numberOfChapters, author } =
    audiobook

  const audioRef = useRef<HTMLAudioElement>(null)

  const [currentChapter, setCurrentChapter] = useState<number>(chapter)
  const [startTime, setStartTime] = useState<number>(start)
  const [autoPlay, setAutoplay] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)

  const [played, setPlayed] = useState<number>(start)

  const handleEndChapter = () => {
    if (currentChapter === numberOfChapters) return
    setCurrentChapter(currentChapter + 1)
    setStartTime(0)
    setAutoplay(true)
  }

  const handleMetadata = () => {
    if (!audioRef.current) return
    setDuration(Math.floor(audioRef.current.duration))
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    setPlayed(Math.floor(audioRef.current.currentTime))
    setDuration(Math.floor(audioRef.current.duration))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <audio
          src={`/audiobooks/${path}/${currentChapter}.${ext}#t=${startTime}`}
          ref={audioRef}
          onEnded={handleEndChapter}
          autoPlay={autoPlay}
          onLoadedMetadata={handleMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
        <DisplayTrack
          name={name}
          author={author}
          played={played}
          audioRef={audioRef}
          duration={duration}
        />
        <Controls audioRef={audioRef} />
      </Container>
    </ThemeProvider>
  )
}

export default Player
