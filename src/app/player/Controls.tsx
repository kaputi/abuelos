'use client'

import { Forward30, Pause, PlayArrow, Replay30 } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { useState, RefObject, useEffect } from 'react'

type Props = {
  audioRef: RefObject<HTMLAudioElement>
}

// TODO:
const audioIcrement = 30

const Controls = ({ audioRef }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, audioRef])

  const playPause = () => setIsPlaying(!isPlaying)

  const fastForward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime += audioIcrement
  }
  const rewind = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime -= audioIcrement
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <IconButton onClick={rewind}>
        <Replay30 sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton onClick={playPause} aria-label="play">
        {isPlaying ? (
          <Pause sx={{ fontSize: 50 }} />
        ) : (
          <PlayArrow sx={{ fontSize: 50 }} />
        )}
      </IconButton>
      <IconButton onClick={fastForward}>
        <Forward30 sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  )
}

export default Controls
