import React, { useState } from 'react'
import styles from './TopBar.module.css'
import { AppBar, Box, Button, Card, CardContent, Modal } from '@mui/material'

type Props = {}

const TopBar = ({}: Props) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <AppBar position='static'>
        <div className={styles.topBar}>
          <Button onClick={handleOpen} size="medium" variant="contained">
            Calendario
          </Button>
        </div>
      </AppBar>

      <Modal open={open} onClose={handleClose}>
        <Box className={styles.modalBox}>
          <Card className={styles.modalCard}>
            <Button variant="contained" onClick={handleClose}>
              Cerrar
            </Button>
            <CardContent>SOMETHING</CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  )
}

export default TopBar
