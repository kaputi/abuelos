import React, { useEffect, useState } from 'react'
import styles from './MyModal.module.css'
import { Modal } from '@mui/material'

type Props = {
  open: boolean
  children: React.ReactNode
  closeDisabled?: boolean
}

const MyModal = ({ open, closeDisabled, children }: Props) => {
  const [openState, setOpenState] = useState(open)

  useEffect(() => {
    setOpenState(open)
  }, [open])

  const handleClose = () => {
    if (!closeDisabled) setOpenState(false)
  }

  return (
    <Modal open={openState} onClose={handleClose}>
      <div className={styles.modalCard}>{children}</div>
    </Modal>
  )
}

export default MyModal
