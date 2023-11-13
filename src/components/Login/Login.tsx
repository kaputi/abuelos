import React, { useState } from 'react'
import MyModal from '../MyModal'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type Props = {}

const Login = ({}: Props) => {
  const [wrongPassword, setWrongPassowrd] = useState<boolean>(false)
  const [wrongUser, setWrongUser] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [password, setPassword] = useState<string>('')
  const [user, setUser] = useState<string>('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault()

  return (
    <MyModal closeDisabled={true} open={true}>
      <Card sx={{ p: '10px' }} variant="outlined">
        <CardContent>
          <FormControl
            sx={{ m: 1, width: '90%' }}
            error={wrongUser}
            variant="standard"
          >
            <InputLabel htmlFor="userInput">User name</InputLabel>
            <Input
              id="userInput"
              type="text"
              value={user}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser(event.target.value)
              }}
            />
            {wrongUser && <FormHelperText>Wrong user name.</FormHelperText>}
          </FormControl>

          <FormControl
            sx={{ m: 1, width: '90%' }}
            error={wrongPassword}
            variant="standard"
          >
            <InputLabel htmlFor="passwordInput">Password</InputLabel>
            <Input
              id="passwordInput"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {wrongPassword && <FormHelperText>Wrong password.</FormHelperText>}
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained">Login</Button>
        </CardActions>
      </Card>
    </MyModal>
  )
}

export default Login
