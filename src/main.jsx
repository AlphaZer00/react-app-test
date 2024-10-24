import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Favoritefood, Favoritefoodtwo } from './Favoritefood.jsx'
import Component from './Component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Favoritefood />
    <Favoritefoodtwo />
    <Component />
  </StrictMode>,
)
