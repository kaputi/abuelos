import React from 'react'
import styles from './MainButton.module.css'

type Props = {
  children?: React.ReactNode
}

const MainButton = ({ children }: Props) => {
  return <div className={styles.mainButton}>{children}</div>
}


export default MainButton
