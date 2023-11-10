import { Remove } from '@mui/icons-material'
import React from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const RemoveButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      <Remove />
    </button>
  )
}

export default RemoveButton
