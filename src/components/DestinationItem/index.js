// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props

  const {imgUrl, name} = destinationDetails

  return (
    <li className="card-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="sub-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
