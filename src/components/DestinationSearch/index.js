// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            className="input-style"
            onChange={this.onChangeSearchInput}
            type="search"
            placeholder="Search"
            value={searchInput}
          />

          <span className="button">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </span>
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
