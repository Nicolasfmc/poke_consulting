import { memo } from 'react'
import NavBar from '../../components/NavBar'
import { AccordionFAQ, CardPlans } from './components'
import { Box } from '@mui/material'
import colors from '../../utils/colors'
import Footer from '../../components/Footer'

const Pricing = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: '320%',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          Choose Your Plan
        </p>
        <p style={{ color: colors.subText, fontSize: '1.2em' }}>
          Select the Perfect Pokémon Training Package
        </p>
      </div>
      <Box
        flexDirection={'row'}
        display={'flex'}
        width={'100%'}
        height={'45vh'}
        justifyContent={'center'}
        marginY={8}
      >
        <CardPlans
          titlePlan="Trainer Plan"
          price={5}
          features={[
            'Basic Team Review',
            'Type Matchup Analysis',
            'Monthly Team Adjustment',
            'Access to Basic Guides',
          ]}
        />
        <CardPlans
          titlePlan="Gym Leader Plan"
          price={10}
          features={[
            'All Trainer Plan Benefits',
            'Advanced Team Composition',
            'Move Set Optimization',
            'Strategy Consultation',
          ]}
        />
        <CardPlans
          titlePlan="Elite Four Plan"
          price={20}
          features={[
            'All Gym Leader Plan Benefits',
            'Personalized Training Regimen',
            'Monthly Battle Simulation',
            'Weekly Team Check-ins',
          ]}
        />
        <CardPlans
          titlePlan="Elite Champion Plan"
          price={40}
          features={[
            'All Elite Four Plan Benefits',
            'Exclusive Meta Reports',
            'One-on-One Coaching Session',
            'Priority Support',
          ]}
        />
      </Box>
      <div style={{ marginLeft: 40 }}>
        <h1>Heading for FAQs</h1>
      </div>
      <AccordionFAQ />
      <Footer />
    </>
  )
}

export default memo(Pricing)
