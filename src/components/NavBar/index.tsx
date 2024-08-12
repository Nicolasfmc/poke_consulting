import { memo } from 'react'
import colors from '../../utils/colors'
import Logo from '../../assets/logos/logo_default.png'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { isUserLogged, Logout } from '../../utils/functions'
import { toast } from 'react-toastify'

const NavBar = () => {
  const navigation = useNavigate()

  const handleLogout = () => {
    try {
      Logout()
    } catch (error) {
      console.log(error)
    } finally {
      toast.success('Usuario deslogado com sucesso!')
      navigation('/')
    }
  }

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
        {isUserLogged() ? (
          <Button
            variant="text"
            style={{ color: colors.titleText }}
            onClick={() => navigation('/admin')}
          >
            Admin
          </Button>
        ) : (
          <></>
        )}
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
        {isUserLogged() ? (
          <Button style={{ marginLeft: 5 }} onClick={() => handleLogout()}>
            Sign Out
          </Button>
        ) : (
          <Button
            style={{ marginLeft: 5 }}
            onClick={() => navigation('/login')}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}

export default memo(NavBar)
