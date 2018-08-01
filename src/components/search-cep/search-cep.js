'use strict'

import React from 'react'

const SearchCep = ({ adress, city, code, district, state, handleSubmit, status, isFetching }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>buscar endereço</button>
    </form>

    {status === 0 && <div>CEP não encontrado</div>}

    {status === 1 && (
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{code}</td>
            <td>{adress}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
    
  </div>
)

export default SearchCep
