import React, { useState } from 'react'
import { useCallback } from 'react';
import UseCallbackChild from './useCallbackChild';

export default function UseCallbackParent() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(null);

    const func = useCallback(() => {
        console.log("Hello");
    }, [])
    
    return (
        <div>
            <UseCallbackChild count2={count2} fun={func} />
            <button onClick={() => { setCount1(count1 + 1) }}>count1:{count1}</button>
        </div>
    )
}
