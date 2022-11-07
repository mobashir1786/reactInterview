//1.    Difference between Axios and fetch

// Fetch: The Fetch API provides a fetch() method defined on the window object. 
// It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). 
// The fetch method has one mandatory argument- the URL of the resource to be fetched. 
// This method returns a Promise that can be used to retrieve the response of the request.
// import React from "react";
// export const Fetch = () => {
//     fetch("https://api.github.com/users") //api for the get request
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     return (
//         <>
//             <h3>In fetch method server respond with data that should be converted to JSON to get understand.</h3>
//         </>
//     );
// };

// Axios: Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser.
// it supports the Promise API that is native to JS ES6.
// It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
// It also has the ability to cancel requests.
// import axios from 'axios';
// import React from 'react';
// export const Axios = () => {
//     const getCustomersData = () => {
//         axios.get("https://api.github.com/users")
//             .then(data => console.log(data))
//             .catch(error => console.log(error));
//     };
//     getCustomersData();
//     return (
//         <>
//             <h4>
//                 It gives the response in Json form that will be easy for user to read
//             </h4>
//         </>
//     )
// }





//2.    What is UseState Hook ?(Implementation)

// Usestate hook is used to track the state or the data of the functional components
// It returns two values 1st is a state and second one is a function to update the state. 
// but it has a one drawback that whenever the state changes our whole component get re-rendered each time and sometime it will caught on in infinite re-rendering loop

// import React, { useState } from 'react'
// export default function Usestate() {
//     const [value, setValue] = useState(0);
//     return (
//         <>
//             <h1>{value}</h1>
//             <button onClick={() => { setValue(value + 1) }}>Inc</button>
//             <button onClick={() => { setValue(value - 1) }}>Dec</button>
//         </>
//     )
// }





//3.    What is useEffect Hook ?(Implementation)

// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments.The second argument is optional

// import React, { useState, useEffect } from "react";

// export default function UseEffect() {
//     const [value, setValue] = useState(0);
//     useEffect(() => {
//         console.log("It will re-render when the value will change.");
//     }, [value]);
//     return (
//         <>
//             <div>The useEffect Hook allows you to perform side effects in your components.
//                 Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//                 useEffect accepts two arguments. The second argument is optional
//             </div>
//             <h1>{value}</h1>
//             <button onClick={() => { setValue(value + 1) }}>Inc</button>
//             <button onClick={() => { setValue(value - 1) }}>Dec</button>
//         </>
//     );
// }





//4.    What is UseReducer Hook ?(Implementation)
// The useReducer Hook is an alternative to the useState Hook.
// The difference is that it allows for more complex logic and state updates that involve multiple sub - values.
// Similar to useState, useReducer lets you create state - like variables that cause the UI to be updated whenever they change.
// This Hook accepts 2 arguments: a reducer function and an initial state.