'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  constructor () {
    super()
    this.state = {
      endereco = {
        adress: '',
        city: '',
        code: '',
        district: '',
        state: '',
        status: 1
      }
    }
  }

  async componentDidMount () {
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: '06233-030' })
    this.setState(response)
    console.log(response)
  }

  render () {
    return (
      <SearchCep {...this.state.endereco} />
    )
  }
}

export default SearchCepContainer
