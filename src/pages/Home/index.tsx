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

            height: '450px',

            justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'column',
          }}
        >
          <h1>PokeConsult</h1>
          <p>Master the art of Pokemon training</p>
          <Button onClick={() => navigate('/pricing')}>I Want!</Button>
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
            imageUrl="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png"
            title="About Us"
            text={`We are a Brazil-based consultancy dedicated to helping Pokemon trainers excel. 
            Our expertise lies in crafting winning team compositions and providing strategic 
            advice to elevate your Pokemon battles in console games. Let us be your guide to 
            mastering the art of Pokemon training and strategy.`}
          />
          <ImageTextComponent
            imageUrl="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png"
            title="Heading"
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
            flexDirection: 'column',
            padding: '20px 0px 30px 0px',
            marginLeft: '10%',
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
                  width: '30%',
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
                  width: '30%',
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
                  width: '30%',
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
                  width: '30%',
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
      <figure
        role="banner_lets_team_together"
        style={{
          display: 'flex',

          width: window.innerWidth,
          height: '425px',

          margin: 0,

          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          backgroundColor: '#78B1AD',
        }}
      >
        <h1>Let&apos;s Team Together</h1>
        <p>Check our pricing plans and start now your journey to the top</p>
        <Button onClick={() => navigate('/pricing')}>Let&apos;s Do It!</Button>
      </figure>
      <Footer />
    </>
  )
}

export default Home
