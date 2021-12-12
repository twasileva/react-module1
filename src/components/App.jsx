import { PageTitle } from 'components/PageTitle/PageTitle'
import { EventBord } from './EventBoard/EventBoard'
import  upcomingEvents  from '../upcoming-events.json'

export const App = () => (
  <>
    <PageTitle text="24th Core Worlds Coalition Conference" />
    <EventBord events={upcomingEvents}/>
    </>
  )
