import axios from 'axios';
import React from 'react';
export const Axios = () => {
    const getData = () => {
        axios.get("https://api.github.co/users")
            .then(data => console.log(data))
            .catch(error => console.log(error));
    };
    return (
        <>
            <h4>
                Axios to get data
            </h4>
            <button onClick={()=>{getData()}}>click</button>
        </>
    )
}