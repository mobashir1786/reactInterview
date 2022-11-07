import React from "react";
export const Fetch = () => {
    const getData=()=>{
        fetch("https://api.github.com/users") //api for the get request
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    
    return (
        <>
            <h3>fetch method</h3>
            <button onClick={()=>{getData()}}>click</button>
        </>
    );
};