import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [value, setValue] = useState(1);
    const Suma = () => {
        while (value < stock) {
            setValue(value + 1)
        }
    }
    const Resta = () => {
        while (value < stock) {
            setValue(value - 1)
        }
    }
    return (
        <div>
            <p>Stock disponible: {stock}</p>
            <div className="ItemCount">
                <button onClick={Resta} >-</button>
                <div>{value}</div>
                <button onClick={Suma} >+</button>
            </div>
        </div>
    )
}

export default ItemCount;