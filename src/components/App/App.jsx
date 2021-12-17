import { PageTitle } from 'components/PageTitle/PageTitle'
import { EventBord } from '../EventBoard/EventBoard'
import upcomingEvents from '../../upcoming-events.json'
import { Container } from './App.styled'


export const App = () => (
  <Container>
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBord events={upcomingEvents}/>
    </Container>
  )
