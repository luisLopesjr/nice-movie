import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import Router from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>,
)
