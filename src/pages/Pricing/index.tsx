import { memo } from 'react'
import NavBar from '../../components/NavBar'
import { CardPlans } from './components'
import { Box } from '@mui/material'
import colors from '../../utils/colors'

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
        <p style={{ color: colors.subText }}>
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
          features={['Features', 'Features', '', '']}
        />
        <CardPlans
          titlePlan="Gym Leader Plan"
          price={10}
          features={[
            'All Trainer Plan Benefits',
            'Features',
            'Features',
            'Features',
          ]}
        />
        <CardPlans
          titlePlan="Elite Four Plan"
          price={20}
          features={[
            'All Gym Leader Plan Benefits',
            'Features',
            'Features',
            'Features',
          ]}
        />
        <CardPlans
          titlePlan="Elite Four Plan"
          price={20}
          features={[
            'All Gym Leader Plan Benefits',
            'Features',
            'Features',
            'Features',
          ]}
        />
      </Box>
      <div style={{ marginLeft: 40 }}>
        <h1>Heading for FAQs</h1>
      </div>
    </>
  )
}

export default memo(Pricing)
