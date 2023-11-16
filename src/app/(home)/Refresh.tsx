'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

type Props = {}

const RefreshPage = ({}: Props) => {
  useEffect(() => {
    const refreshToken = async () => {
      const res = await fetch('http://localhost:5000/auth/refresh', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'GET',
      })

      // TODO: if refresh token expired : 401 or something goes wrong, accessToken needs to be removed so ther is no a loop betrween home page and  refresh page

      const data = await res.json()

      redirect('/')
    }

    refreshToken()
  }, [])

  // TODO: if token, try authentication and refresh user
  return <></>
}

export default RefreshPage
