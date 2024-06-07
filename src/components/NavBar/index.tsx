import { memo } from 'react'
import colors from '../../utils/colors'
import Logo from '../../assets/pokeball_logo.png'
import Button from '../Button'

const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: colors.background,

        width: '100%',
        height: '164px',

        // minWidth: '1280px',

        paddingLeft: '80px',
        paddingRight: '80px',

        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img alt="logo" src={Logo} width={'40px'} height={'auto'} />
      <div
        style={{
          display: 'flex',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button variant="text" style={{ color: colors.titleText }}>
          Pricing
        </Button>
        <Button variant="text" style={{ color: colors.titleText }}>
          Page
        </Button>
        <Button variant="text" style={{ color: colors.titleText }}>
          Page
        </Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
}

export default memo(NavBar)
