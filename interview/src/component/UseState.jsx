import React, { useState } from 'react'

export default function Usestate() {
    const [value, setValue] = useState(0);
    return (
        <>
            <p>Usestate hook is used to track the state or the data of the functional components</p>
            <p>It returns two values 1st is a state and second one is a function to update the state</p>
            <p>but it has a one drawback that whenever the state changes our whole component get re-rendered each time and sometime it will caught on in infinite re-rendering loop</p>
            <h1>{value}</h1>
            <button onClick={() => { setValue(value + 1) }}>Inc</button>
            <button onClick={() => { setValue(value - 1) }}>Dec</button>
        </>
    )
}