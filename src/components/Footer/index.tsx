import { memo } from 'react'
import colors from '../../utils/colors'
import { Divider, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <>
      <Divider
        variant="middle"
        flexItem
        sx={{
          display: 'flex',

          width: '50%',

          alignSelf: 'center',
        }}
      />
      <div
        style={{
          display: 'flex',

          width: '100%',
          height: '100px',

          justifyContent: 'space-around',
          alignItems: 'center',

          backgroundColor: colors.background,
        }}
      >
        <h5>PokeConsult</h5>
        <div
          style={{
            display: 'flex',

            width: '20px',

            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Link
            href="https://instagram.com/Ralydesign_"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon fontSize="small" />
          </Link>
          <Link
            href="https://github.com/Nicolasfmc"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default memo(Footer)
