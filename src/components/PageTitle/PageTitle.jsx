import PropTypes from 'prop-types'
import { Title } from './PageTitle.styled'


export const PageTitle = ({text}) => (
  <Title>{text}</Title>
)

PageTitle.propTypes = {
  text:PropTypes.string.isRequired,
}