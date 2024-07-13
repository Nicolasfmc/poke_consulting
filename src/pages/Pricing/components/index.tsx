import {
  Accordion,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { formatPrice } from '../../../utils/functions'
import colors from '../../../utils/colors'
import Button from '../../../components/Button'

interface Props {
  titlePlan: string
  price: number
  features: string[]
}

export const CardPlans = ({ titlePlan, price, features }: Props) => {
  return (
    <>
      <Card
        sx={{
          width: 350,
          height: '100%',
          maxHeight: '425px',
          borderRadius: 2,
          boxShadow: 3,
          marginX: 5,
        }}
        elevation={2}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {titlePlan}
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{ color: colors.titleText }}
          >
            {formatPrice(price)}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            per month
          </Typography>
          <List>
            {features.map((f, i) => (
              <ListItem key={i} sx={{ marginY: 1 }}>
                &#x2022; {f}
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ color: 'white', margin: '0 auto', width: '80%' }}
            textTransform="lowercase"
          >
            Select
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export const AccordionFAQ = () => {
  return (
    <>
      <Accordion>a</Accordion>
    </>
  )
}
