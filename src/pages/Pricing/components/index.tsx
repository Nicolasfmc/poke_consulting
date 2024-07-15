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
          width: 400,
          height: '400px',
          borderRadius: 2,
          boxShadow: 3,
          marginX: 5,
        }}
        elevation={2}
      >
        <CardContent sx={{ padding: 3 }}>
          <Typography
            sx={{ fontSize: 14, marginBottom: -1.5 }}
            color="text.secondary"
          >
            {titlePlan}
          </Typography>
          <div
            style={{
              display: 'flex',
              maxHeight: '45px',
            }}
          >
            <h1
              style={{
                color: colors.titleText,
                fontWeight: 'bold',
              }}
            >
              {formatPrice(price)}
            </h1>
            <Typography
              sx={{
                fontSize: 14,
                display: 'flex',
                alignItems: 'flex-end',
                margin: '0 0 -10px 5px',
              }}
              color="text.secondary"
            >
              per month
            </Typography>
          </div>
          <List sx={{ marginTop: 1 }}>
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
            sx={{ color: 'white', margin: '0 auto', width: '90%', height: 50 }}
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
