import React, { useState, useEffect } from "react";

export default function UseEffect() {
    const [value, setValue] = useState(0);
    useEffect(() => {
      console.log("with no dependency it will re-render again and again.");
    });
    useEffect(() => {
      console.log("with empty array it will re-render once");
    },[]);
    useEffect(() => {
        console.log("It will re-render when the value will change.");
    }, [value]);
    return (
        <>
            <div>The useEffect Hook allows you to perform side effects in your components.
                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                useEffect accepts two arguments. The second argument is optional
            </div>
            <h1>{value}</h1>
            <button onClick={() => { setValue(value + 1) }}>Inc</button>
            <button onClick={() => { setValue(value - 1) }}>Dec</button>
        </>
    );
}