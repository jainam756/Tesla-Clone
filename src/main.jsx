import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
const car=
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <Provider> */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  {/* </Provider> */}
  </BrowserRouter>,
)
