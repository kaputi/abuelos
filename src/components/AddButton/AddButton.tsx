import { Add } from '@mui/icons-material'
import React from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AddButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      <Add />
    </button>
  )
}

export default AddButton
