import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import Layout from './router'
import './components/styles.scss'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

