import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'Increment1': return state + 1;
        case 'Increment2': return state + 2;
        case 'Decrement1': return state - 1;
        case 'Decrement2': return state - 2;
        default: return state;
    }
}
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                The useReducer Hook is an alternative to the useState Hook. <br />
                The difference is that it allows for more complex logic and state updates that involve multiple sub-values. <br />
                Similar to useState, useReducer lets you create state-like variables that cause the UI to be updated whenever they change <br />
                This Hook accepts 2 arguments: a reducer function and an initial state.
            </div>
            <h1> {state}</h1>
            <button onClick={() => { dispatch('Increment1') }}>Inc +1</button>
            <button onClick={() => { dispatch('Increment2') }}>Inc +2</button>
            <button onClick={() => { dispatch('Decrement1') }}>Dec -1</button>
            <button onClick={() => { dispatch('Decrement2') }}>Dec -2</button>
        </>
    )
}