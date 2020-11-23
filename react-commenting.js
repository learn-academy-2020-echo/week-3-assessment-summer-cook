// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) imports React and Component from the react library
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2)We created a new component that extends the Component class
  constructor(props){
    super(props)
    // 3) calls the state object with key:value pairs
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4) destructures the keys from the state object
    let { rollImages, diceLog } = this.state
    // 5)sets the variable for a random dice roll to choose a random image from rollImages
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6)changes/sets the state of currentPic to the image with the new Roll number and logs this new roll number in the diceLog
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7)calls a method that reurns all the UI to the screen.
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8) Calls the component for Dice
        <Dice
          // 9)passes the function that defines the current handleRoll and has it render where the roll should appear.
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10)exports the Board component back to react
export default Board
