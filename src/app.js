'use strict'

import React from 'react'

const App = () => (
  <div>
    <input type='text' />

    <ul>
      <li style={{ textDecoration: 'line-through' }}>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>

    <div>
      <h3>Exibir</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A Fazer</a>
    </div>
  </div>
)

export default App
