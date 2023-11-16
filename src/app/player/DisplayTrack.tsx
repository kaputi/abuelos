'use client'

import { Grid, LinearProgress, Typography } from '@mui/material'
import { RefObject } from 'react'

type Props = {
  name: string
  author: string
  duration: number
  played: number
  audioRef: RefObject<HTMLAudioElement>
}

const formatSeconds = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60 - hours * 60)
  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes
  const seconds = totalSeconds % 60
  const formatSeconds = seconds < 10 ? `0${seconds}` : seconds

  return `${hours}:${formatMinutes}:${formatSeconds}`
}

const DisplayTrack = ({ name, duration, played, author }: Props) => {
  const durationString = formatSeconds(duration)
  const progressString = formatSeconds(played)
  const progress = (played / (duration > 0 ? duration : 0.0001)) * 100 // DON'T DIVIDE BY 0
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="subtitle1">{author}</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={1}>
          <Typography variant="body1" align="center">
            {progressString}
          </Typography>
        </Grid>
        <Grid sx={{ paddingTop: '0.5rem' }} item xs={10}>
          <LinearProgress value={progress} variant="determinate" />
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1" align="center">
            {durationString}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DisplayTrack
