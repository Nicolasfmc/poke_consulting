import { memo } from 'react'
import NavBar from '../../components/NavBar'
import { CardPlans } from './components'
import { Box } from '@mui/material'

const Pricing = () => {
  return (
    <>
      <NavBar />
      <Box
        flexDirection={'row'}
        display={'flex'}
        width={'100%'}
        height={'45vh'}
        justifyContent={'center'}
        sx={{ backgroundColor: 'blue' }}
      >
        <CardPlans
          titlePlan="Trainer Plan"
          price={5}
          features={['Features', 'Features', 'Features', 'Features']}
        />
        <CardPlans
          titlePlan="Gym Leader Plan"
          price={5}
          features={['Features', 'Features', 'Features', 'Features']}
        />
        <CardPlans
          titlePlan="Elite Four Plan"
          price={5}
          features={['Features', 'Features', 'Features', 'Features']}
        />
      </Box>
    </>
  )
}

export default memo(Pricing)
