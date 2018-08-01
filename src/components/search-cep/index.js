'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import axios from 'axios'
import { connect } from 'react-redux'

class SearchCepContainer extends PureComponent {
  state = {
    endereco: {
      isFetching: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({isFetching: true})
    const cep = e.target.cep.value

    await axios.get('http://apps.widenet.com.br/busca-cep/api/cep.json?code='+ cep)
      .then(response => { this.setState({ endereco: { ...response.data } }) })
    
    this.setState({isFetching: false})
  }

  render () {
    console.log(this.props)
    return (
      <SearchCep {...this.state.endereco} handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  endereco: state.endereco
}

export default connect(mapStateToProps)(SearchCepContainer)
