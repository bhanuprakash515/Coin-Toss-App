import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headsCount: 0,
    tailCount: 0,
  }

  onChangeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
      }))
    }
  }

  render() {
    const {imageUrl, totalCount, headsCount, tailCount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onChangeToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-para">Total : {totalCount}</p>
            <p className="count-para">Heads : {headsCount}</p>
            <p className="count-para">Tails : {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
