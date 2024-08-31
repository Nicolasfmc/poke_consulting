import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
            style={{
              color: 'white',
              margin: '0 auto',
              width: '90%',
              height: 50,
              fontSize: '1.1em',
            }}
          >
            Select
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export const AccordionFAQ = () => {
  const faqs = [
    {
      title: 'What types of Pokémon games do you specialize in?',
      content:
        'We specialize in Pokémon console games such as Pokémon Sword and Shield, Pokémon Brilliant Diamond and Shining Pearl, and Pokémon Legends: Arceus. We do not work with Pokémon TCG or Pokémon GO.',
    },
    {
      title: 'How can your consultancy help improve my Pokémon team?',
      content:
        'Our consultancy offers expert advice on team composition, battle strategies, and in-game mechanics to help you optimize your Pokémon team for competitive play.',
    },
    {
      title: 'Do you provide personalized coaching sessions?',
      content:
        'We offer personalized coaching depending on the plan you choose. Our experts will work with you to develop strategies that fit your playstyle and enhance your overall performance.',
    },
  ]

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          style={{
            margin: '0 5% 0 5%',
            boxShadow: 'none',
            border: 'none',
            fontFamily: 'Varela Round',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight={'bold'} fontFamily={'Varela Round'}>
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontFamily={'Varela Round'}>{faq.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <div style={{ marginBottom: '3%' }} />
    </>
  )
}
