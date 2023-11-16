'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './HomePage.module.css'
import TopBar from '@/components/TopBar'
import {
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  ThemeProvider,
} from '@mui/material'
import Login from '@/components/Login'
import { theme } from '../theme'
import Link from 'next/link'

const HomePage = () => {
  const router = useRouter()

  const [showLogin, setShowLogin] = useState<boolean>(true)

  const loginHandler = async (user: string, password: string) => {
    const res = await fetch('http://localhost:5000/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        name: 'abuelo',
        password: 'abuelo12345',
      }),
    })

    const jsonRes = await res.json()
    console.log(jsonRes)
    setShowLogin(false)
  }

  const testHandler = async () => {
    console.log('test')
    const res = await fetch('http://localhost:5000/auth/refresh', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'GET',
    })

    const jsonRes = await res.json()
    console.log(jsonRes)

    router.refresh()
  }

  const [coffee, setCoffee] = useState(0)
  const [siesta, setSiesta] = useState(0)
  const [openSiesta, setOpenSiesta] = useState(false)

  const addCoffee = async () => {
    const cofeeRes = await fetch('http://localhost:5000/coffee', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    })

    const coffeeData = await cofeeRes.json()
    console.log(coffeeData)

    setCoffee(coffee + 1)
  }

  const removeCoffe = () => {
    if (coffee <= 0) return
    setCoffee(coffee - 1)
  }

  const addSiesta = () => setSiesta(siesta + 1)

  const handleOpenSiesta = () => setOpenSiesta(true)
  const handleCloseSiesta = () => setOpenSiesta(false)

  return (
    <ThemeProvider theme={theme}>
      <Login
        loginHandler={loginHandler}
        testHandler={testHandler}
        show={showLogin}
      />
      <TopBar />
      <Container sx={{ padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid xs={6} item>
            <Paper className={styles.mainPaper}>
              Coffee: {coffee}
              <Button onClick={removeCoffe}>Remove</Button>
              <Button onClick={addCoffee}>Add</Button>
            </Paper>
          </Grid>

          <Grid xs={6} item>
            <Paper className={styles.mainPaper}>
              Siestas: {siesta}
              <Button onClick={handleOpenSiesta}>Add</Button>
            </Paper>
          </Grid>

          <Grid xs={6} item>
            <Paper className={styles.mainPaper}>Ejercicio</Paper>
          </Grid>

          <Grid xs={6} item>
            <Link style={{ textDecoration: 'none' }} href="/player">
              <Paper className={styles.mainPaper}>AudioLibros</Paper>
            </Link>
          </Grid>
        </Grid>

        <Modal open={openSiesta} onClose={handleCloseSiesta}>
          <div>aaaaaaaaaaaaaaaaaa</div>
        </Modal>
      </Container>
    </ThemeProvider>
  )
}

export default HomePage
