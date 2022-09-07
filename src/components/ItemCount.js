import React from 'react'
import { useState, useEffect } from 'react'


const ItemCount = ({ stock }) => {
    const [value, setValue] = useState(0);
    const [resta, setResta] = useState(0);
    const [suma, setSuma] = useState(0);
    const [cartvalue, setcartValue] = useState("");
    useEffect(() => {
        if(value > 0) {
            setValue(value - 1)}
    }, [resta])
    useEffect(() => {
        if(value < stock) {
            setValue(value + 1)}
    }, [suma])
    useEffect(() => {
        setValue(1)
    }, [])
    return (
        <div className="InterfazProductos">
            <p>Stock disponible: {stock}</p>
            <button onClick={() => {setcartValue("Agregaste " + value + " productos al carrito"); setValue(0)}} >Agregar al carrito</button>
            <div className="ItemCount">
                <button onClick={() => setResta(resta + 1)} >-</button>
                <div>{value}</div>
                <button onClick={() => setSuma(suma + 1)} >+</button>
            </div>
            <p>{cartvalue}</p>
        </div>
    )
}

export default ItemCount;