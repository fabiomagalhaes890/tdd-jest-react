'use strict'

import React, { PureComponent } from 'react'

class Pure extends PureComponent {
  constructor () {
    super()
    this.state = {
      color: {
        otherColor: 'purple',
        moreOtherColor: 'white'
      }
    }

    this.handleClick = () => {
      this.setState({
        color: {
          ...this.state.color,
          otherColor: 'black'
        }
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.color.otherColor === this.state.color.otherColor)
      return false;
  }

  render () {
    return (
      <div>
        <span>Color name: {this.state.color.otherColor}</span>
        <br />
        <span>More other Color name: {this.state.color.moreOtherColor}</span>
        <br />
        <button onClick={this.handleClick}> change color</button>
      </div>
    )
  }
}

export default Pure
