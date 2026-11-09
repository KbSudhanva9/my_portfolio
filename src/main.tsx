import React from 'react'
import ReactDOM from 'react-dom/client'
import Playground from './Playground'
import './playground.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>,
)
