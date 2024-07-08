import {
  Accordion,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"
import { formatPrice } from "../../../utils/functions"
import colors from "../../../utils/colors"

interface Props {
  titlePlan: string
  price: number
  features: string[]
}

export const CardPlans = ({
  titlePlan, price, features
}: Props) => {
  return (
    <>
      <Card sx={{ minWidth: 275, height: 150, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {titlePlan}
          </Typography>
          <Typography variant="h3" component="div" sx={{ color: colors.titleText }}>
            {formatPrice(price)}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            per month
          </Typography>
          <List>
            {features.map((i) => (
              <ListItem>
                <ListItemText primary={i} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" sx={{ color: 'white', margin: '0 auto' }}>
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
