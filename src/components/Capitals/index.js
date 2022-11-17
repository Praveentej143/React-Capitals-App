import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state
    const filterData = countryAndCapitalsList.find(
      each => each.id === activeCountryId,
    )
    return filterData.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="input-container">
            <select className="select-btn" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <p>is capital of which country</p>
            <p className="country-name">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
