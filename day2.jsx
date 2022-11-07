//1.    What is the Difference between react and react native? Which one is library or framework?

// Both are Developed by Facebook.
// React js is used to build we application but react native is used to create mobile app.
// React js is Library and React native is framework. 





//2.    What is the package name you are using for routing ?

// react-router-dom is the package name for routing 
// we can install this package using npm i react-router-dom/ yarn add react-router-dom




//3.    Routing Implementation

// we need to install first package of router using  npm i react-router-dom. 
// after that we need to create some component like Home.jsx, About.jsx, Contact.jsx and Navbar.jsx
// now inside the Navbar.jsx 
// import React from 'react'
// import {Link} from 'react-router-dom'
// export default function Nav() {
//   return (
//     <div>
//         <ul>
//             <li><Link to="Home">Home</Link></li>
//             <li><Link to="About">About</Link></li>
//             <li><Link to="Contact">Contact</Link></li>
//         </ul>
//     </div>
//   )
// }

// now in App.js
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './component/nav';
// import Home from './component/home';
// import About from './component/about';
// import Class1 from './component/class';
// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//         <Nav/>
//           <Routes>
//             <Route path="Home" element={<Home />} />
//             <Route path="About" element={<About />}/>
//             <Route path="class" element={<Class1 />}/>
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }

// export default App;




//4.    How do you switch/navigate form one component to another in React?

// To switch/Navigate one component to another we use react-router-dom package.
// where we use multiple of component with the help of import.
// like: BrowserRouter,Routes,Route,Switch,Redirect,Link,NavLink,etc 




// 5.   What is lazy loading in react ?

// Lazy loading means that, A part of code or component must we loaded when it requred. 
// it is also reffered to as code splitting and data fatching.

// if any component not necessary to all user or user dosen't access it frequently, it is best way to load it when request to it. 
// for example: let's consider that our application has two section/component A and B.
//  size of each component has 1MB and loading time of each file is 1sec. 
//  if user want to access only component A and we are not apply Lazy loading so, it will take more data as well as time.
//  it is not goood for user so avoiding this kind of problem Lazy Loading came into picture.





//6.    Difference b/w Stateful and stateless Component.

// #Stateless Components:
// -If the behaviour is independent of its state then it can be a stateless component.
// -You can use either a function or a class for creating stateless components.
// -But unless we need to use a lifecycle hook in your components, we should go for function components. 
// -There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.
// -functional componets are Stateless Components.

// #Stateful Components:
// -If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. -
// -These stateful components are always class components and have a state that gets initialized in the constructor. 
// -class componets are Stateful Components.
