'use strict'

import React, { Component } from 'react'

class LearningPromise extends Component {
  constructor () {
    super()
    this.state = {
      title: '...'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('my app with promise async/ await')
      }, 2000);
      
    })
  }

  async componentDidMount() {
      let result = await this.getTitle()
      this.setState({
        title: result
      })

  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default LearningPromise
