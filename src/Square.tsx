import React from 'react'
import './App.css'
type squareProps = {
    value: string
    onSquareClick: () => void
    styles?: React.CSSProperties
}


export default function Square({ value, onSquareClick, styles }: squareProps) {
    return (
        <button className='square' style={styles} onClick={onSquareClick}>
            {value}
        </button >
    )
}
