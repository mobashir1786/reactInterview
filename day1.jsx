//1.    What is Virtual DOM ?

// DOM stand for document object moldal.
// Virtual DOM is blue print of real DOM.
// It is also known as diffing algorithm.
// the change which we make in component, these changes  will be combined and create new virtual dom.
// Virtual DOM is Will compare with real DOM.
// then it will only replace where changes has occurd.
// This process increases the efficiency of the application.
// so simplely we can say virtual dom compare with the real dom and where change is happen it will render only that part.




//2.    What is SPA ?

// SPA stand for single page application.
// it is happen in the react because of only one html file is there.
// it will load all the component first time and according to user it is changing the interface or data without loading whole page.
// for example if i created 2 route and user click any route it will rendor only that part.




//3.    What is difference between class and functional component?

// 1.class components
// A class component requires you to extend from React. Component and create a render function which returns a React element.
// It must have the render() method returning JSX (which is syntactically similar to HTML)
// Also known as Stateful components because they implement logic and state.
// React lifecycle methods can be used inside class components (for example componentDidMount).
// It requires different syntax inside a class component to implement hooks. 
// example: constructor(props) { super(props); this.state = {name: ‘ ‘} }
// Constructor are used as it needs to store state.

// 2.Functional Components
// A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
// There is no render method used in functional components.
// Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
// React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// Hooks can be easily used in functional components to make them Stateful. 
// example: const [name,SetName]= React.useState(" ")
// Constructors are not used.




//4.    What does mean by state and its use in react?

// React components has a built-in state object.
// The state object is where we store property values that belongs to the component.
// When the state object changes, the component re-renders.




//5.    What is JSX and why do we use it instead of js?

// JSX stands for JavaScript XML.
// It is simply extension of of js.
// We can directly write html and js in same file.
// JS is simply a scripting language, adding functionality into your website. 
// JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript.





//6.    What is package.json?

// It constains all the metadata of our appication.
// It contains all dependacies, script and versions.
// It is also called as heart of Node js project.
// simply we can say it is all about the node_module, we can't share the node_module file because of heavy file aprox 28MB or more,so we share the pakage.json file exchange of node_module.



// 1: virtual dom , single page application, functional & class 
// 2: state 
// 3: jsx , package.json
// 4,5: react and react native, routing implimentation
// 6: switch/navigate, lazy loading
// 7: state less state full
// 8,9: axios & fetch
// 10: useState hook
// 11: use Effect
// 12: useReducer 
// 13: useMemo 
// 14,15: useRef
// 16,17: Context API
// 18: usecallBack 
// 19: call back & useCallback
// 20: useEffect & useContext, react LifeCycle
// 22: HOC, SEO, KEY, Redux
