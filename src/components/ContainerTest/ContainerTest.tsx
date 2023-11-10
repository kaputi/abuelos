import React from 'react'
import styles from './Container.module.css'

type Props = {
  children: React.ReactNode
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe'
    | 'unsafe'
  alignItems?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'flex-end'
    | 'center'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'firstbaseline'
    | 'lastbaseline'
    | 'stretch'
    | 'safe'
    | 'unsafe'
  style?: 'string'
}

export default function Container({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
}: Props) {
  const direction = styles[flexDirection ?? 'row']
  const wrap = styles[flexWrap ?? 'nowrap']
  // TODO: justify
  const justify = styles[justifyContent ?? 'normal']
  const align = styles[alignItems ?? 'normal']

  return (
    <div
      className={`
        ${styles.Container}
        ${direction}
        ${wrap}
        ${justify}
        ${align}`}
    >
      {children}
    </div>
  )
}
