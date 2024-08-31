import React from 'react'
import NavBar from '../../components/NavBar'
import { defaultStyle, useDimension } from '../../utils/functions'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import ImageTextComponent from './components'
import { Grid } from '@mui/material'
import colors from '../../utils/colors'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SchoolIcon from '@mui/icons-material/School'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import EvoBanner from '../../assets/images/evo_banner.png'
import Empresarios from '../../assets/images/empresarios.png'
import Banner from '../../assets/images/wallpaperpkn.png'

const Home = () => {
  const navigate = useNavigate()
  const mobile = useDimension(640)
  const media1020 = useDimension(1020)

  let cols

  if (mobile) {
    cols = 1
  } else if (media1020) {
    cols = 2
  } else {
    cols = 2
  }

  return (
    <>
      <NavBar />
      <div style={{ ...defaultStyle, height: '100%' }}>
        <section
          role="title"
          style={{
            display: 'flex',

            height: '380px',

            justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'column',

            fontSize: '1.5em',
          }}
        >
          <p
            style={{
              fontSize: '320%',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            PokeConsult
          </p>
          <p
            style={{
              fontSize: '110%',
              marginTop: 20,
              marginBottom: 15,
            }}
          >
            Master the art of Pokemon training
          </p>
          <Button
            style={{ width: '15%', height: '50px', fontSize: '20px' }}
            onClick={() => navigate('/pricing')}
          >
            Let&apos;s Catch &apos;em All!
          </Button>
        </section>
        <main
          role="about_us & other"
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ImageTextComponent
            reverse
            imageUrl={Empresarios}
            title="About Us"
            text={`We are a Brazil-based consultancy dedicated to helping Pokemon trainers excel. 
            Our expertise lies in crafting winning team compositions and providing strategic 
            advice to elevate your Pokemon battles in console games. Let us be your guide to 
            mastering the art of Pokemon training and strategy.`}
          />
          <ImageTextComponent
            imageUrl={EvoBanner}
            title="Why choose us?"
            text={`Choosing our consultancy means gaining access to a team of Pokemon experts dedicated to your success.
            We have the best features compared to cost benefit in the entire market.
            With a proven track record of helping trainers achieve rapid improvements and a commitment to ongoing support,
            we are passionate about helping you excel in your Pokemon adventure.`}
          />
        </main>
        <div
          role="benefits"
          style={{
            display: 'flex',
            width: '110%',
            flexDirection: 'column',
            padding: '20px 0px 30px 80px',
            marginLeft: '5%',
            fontSize: '1.5em',
            textAlign: 'justify',
          }}
        >
          <h2>Benefits of Our Consultancy</h2>
          <Grid
            container
            columns={cols}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={1}>
              <AutoAwesomeIcon fontSize="small" style={{ color: '#454545' }} />
              <h3>Customization</h3>
              <p
                style={{
                  color: colors.subText,
                  width: '50%',
                }}
              >
                Receive advice and strategies tailored to your specific needs
                and goals in the game. We analyze your team and playstyle to
                provide the best recommendations.
              </p>
            </Grid>
            <Grid item xs={1}>
              <SchoolIcon fontSize="small" style={{ color: '#454545' }} />
              <h3>Expertise</h3>
              <p
                style={{
                  color: colors.subText,
                  width: '50%',
                }}
              >
                Our team consists of experienced trainers who deeply understand
                the mechanics of Pokemon console games. You&apos;ll be in good
                hands with our experts.
              </p>
            </Grid>
            <Grid item xs={1}>
              <AccessAlarmIcon fontSize="small" style={{ color: '#454545' }} />
              <h3>Efficiency</h3>
              <p
                style={{
                  color: colors.subText,
                  width: '50%',
                }}
              >
                Improve your battle performance quickly and effectively. Our
                proven methods ensure that you see significant improvements in a
                short time.
              </p>
            </Grid>
            <Grid item xs={1}>
              <SupportAgentIcon fontSize="small" style={{ color: '#454545' }} />
              <h3>Continuous Support</h3>
              <p
                style={{
                  color: colors.subText,
                  width: '50%',
                }}
              >
                We offer continuous support to ensure you keep progressing.
                Whether you&apos;re preparing for a tournament or just want to
                enhance your skills, we&apos;re here to help.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        role="banner_lets_team_together"
        style={{
          position: 'relative',
          width: '100%',
          height: '425px',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src={Banner}
          alt="City"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            textShadow: '0px 0px 8px black',
            fontSize: '2em',
          }}
        >
          <h1>Let&apos;s Team Together</h1>
          <p>Check our pricing plans and start now your journey to the top</p>
          <Button
            style={{ width: '20%', height: '50px', fontSize: '20px' }}
            onClick={() => navigate('/pricing')}
          >
            Check Plans
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
