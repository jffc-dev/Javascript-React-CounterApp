import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import './index.css'
import CounterApp from './CounterApp'

const root = document.getElementById('root');

ReactDOM.render(<CounterApp value={0} />, root)