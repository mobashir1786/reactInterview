import React, { useState } from 'react'
import { useMemo } from 'react';

export default function UseMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // const isEven = () => {
    //     console.log("hi")
    //     let i = 0;
    //     while (i < 500000000) i++;
    //     return count1 % 2 === 0;
    // }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 500000000) i++;
        return count1 % 2 === 0;
    }, [count1])
    return (
        <>
            <h1>incremented number is {isEven ? "Even" : "Odd"}</h1>
            <button onClick={() => { setCount1(count1 + 1) }}>count1:{count1}</button>
            <button onClick={() => { setCount2(count2 + 1) }}>count1:{count2}</button>
        </>
    )
}
