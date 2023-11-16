import { cookies } from 'next/headers'
import HomePage from './HomePage'
import RefreshPage from './Refresh'

export const metadata = {
  title: 'Abuelos',
}

const Page = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')

  if (accessToken) {
    const userRes = await fetch('http://localhost:5000/user', {
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken !== undefined && {
          Authorization: `Bearer ${accessToken.value}`,
        }),
      },
      method: 'GET',
    })

    const resData = await userRes.json()

    // if token expired
    if (resData.code === 401) {
      return <RefreshPage />
    }
  }

  return <HomePage />
}

export default Page
