'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import TopBar from '@/components/TopBar'
import { Button, Card, CardContent, Modal } from '@mui/material'
import Login from '@/components/Login/Login'

type Props = {}

const Home = ({}: Props) => {
  const [coffee, setCoffee] = useState(0)
  const [siesta, setSiesta] = useState(0)
  const [openSiesta, setOpenSiesta] = useState(false)

  const addCoffee = () => setCoffee(coffee + 1)

  const removeCoffe = () => {
    if (coffee <= 0) return
    setCoffee(coffee - 1)
  }

  const addSiesta = () => setSiesta(siesta + 1)

  const handleOpenSiesta = () => setOpenSiesta(true)
  const handleCloseSiesta = () => setOpenSiesta(false)

  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <Login />
        <Card>
          <CardContent>
            Coffee: {coffee}
            <Button onClick={removeCoffe}>Remove</Button>
            <Button onClick={addCoffee}>Add</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            Siestas: {siesta}
            <Button onClick={handleOpenSiesta}>Add</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>Ejecercicio</CardContent>
        </Card>

        <Card>
          <CardContent>Audio Libros</CardContent>
        </Card>

        <Card>
          <CardContent>Cuentos</CardContent>
        </Card>
        <Modal open={openSiesta} onClose={handleCloseSiesta}>
          <div>aaaaaaaaaaaaaaaaaa</div>
        </Modal>
      </main>
    </>
  )
}

export default Home
