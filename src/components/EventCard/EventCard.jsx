import PropTypes from 'prop-types'
import { formattedData } from 'utils/formattedData'
import { durationTime } from 'utils/durationTime'
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import {Card, CardName, Info,Chip} from './EventCard.styled'



export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedDataStart=formattedData(start)
  const duration = durationTime(start, end)
  
return (
    <Card>
    <CardName>{name}</CardName>
  <Info>
    <FaMapMarkerAlt/>
    {location}
  </Info>
  <Info>
    <FaUserAlt/>
    {speaker}
  </Info>
  <Info>
    <FaCalendarAlt/>
    {formattedDataStart}
  </Info>
  <Info>
    <FaClock/>
    {duration}
  </Info>
  <Chip eventType={type}>{type}</Chip>
</Card>
)
}

// className={`${css.chip} ${css[type]}`

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end:PropTypes.string.isRequired,
}