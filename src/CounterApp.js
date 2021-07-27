import PropTypes from 'prop-types'
import React, {useState} from 'react'

const CounterApp = ( {value} ) => {
    const [valor, setValor] = useState(value)
    const handleIncrease = () => {
        setValor(valor + 1)
    }
    const handleDecrease = () => {
        setValor(valor - 1)
    }
    const handleReset = () => {
        setValor(value)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ valor }</h2>
            <button onClick={
                handleIncrease
            }>+1</button>
            <button onClick={
                handleReset
            }>Reset</button>
            <button onClick={
                handleDecrease
            }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
