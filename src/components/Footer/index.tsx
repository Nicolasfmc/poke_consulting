import { memo } from 'react'
import colors from '../../utils/colors'
import { Divider } from '@mui/material'

const Footer = () => {
  return (
    <>
      <Divider variant="middle" flexItem />
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '260px',

          backgroundColor: colors.background,
        }}
      ></div>
    </>
  )
}

export default memo(Footer)
