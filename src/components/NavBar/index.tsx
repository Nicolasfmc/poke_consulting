import { memo } from 'react'
import colors from '../../utils/colors'
import Logo from '../../assets/logos/logo_default.png'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigation = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: colors.background,

        height: '164px',

        paddingLeft: '80px',
        paddingRight: '80px',

        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img
        alt="logo"
        src={Logo}
        width={'120px'}
        height={'auto'}
        style={{ cursor: 'pointer' }}
        onClick={() => navigation('/')}
      />
      <div
        style={{
          display: 'flex',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          variant="text"
          style={{ color: colors.titleText }}
          onClick={() => navigation('/admin')}
        >
          Admin
        </Button>
        <Button
          variant="text"
          style={{ color: colors.titleText }}
          onClick={() => navigation('/pricing')}
        >
          Pricing
        </Button>
        {/* <Button
          variant="text"
          style={{ color: colors.titleText }}
          onClick={() => navigation('/contact')}
        >
          Contact
        </Button> */}
        <Button style={{ marginLeft: 5 }} onClick={() => navigation('/login')}>
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default memo(NavBar)
