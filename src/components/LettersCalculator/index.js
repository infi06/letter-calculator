// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', word: 0}

  getWord = e => {
    const newWord = e.target.value.length
    this.setState({searchInput: e.target.value, word: newWord})
  }

  render() {
    const {searchInput, word} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="container">
            <h1 className="head">Calculate the Letters you enter</h1>
            <label htmlFor="input">Enter the phrase</label>
            <br />
            <input
              onChange={this.getWord}
              type="text"
              value={searchInput}
              placeholder="enter the phrase"
              className="letter"
              id="input"
            />
            <br />
            <p>No.of letters: {word}</p>
          </div>
          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
