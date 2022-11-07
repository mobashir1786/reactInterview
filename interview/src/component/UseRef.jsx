import React from 'react';
import { useRef, useState } from 'react';

export default function UseRef() {
  const value1 = useRef(null);
  const [data, setData] = useState("");

  const handeler = () => {
    // value1.current.value = "";// to set value of text
    value1.current.style.backgroundColor = 'green';//to change the background color
    setData(value1.current.value);// to set the value of data
  }


  return (
    <>
      <h1>{data}</h1>
      <input type='text' ref={value1} />
      <button onClick={handeler}>Click me</button>
    </>
  )
}