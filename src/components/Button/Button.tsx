import React from 'react'
import styles from './Button.module.css'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
