// What is an Event is React ?

// React Event is named in camelCase.It is similar to HTML DOM events.It is
// used to perform user Events.Such as onClick, onChange, onmouseEnter etc.




// What is memory leak and how to overcome?

// React components that perform state updates and run asynchronous
// operations can cause memory leak issues if the state is updated after
// the component is unmounted. Here is a normal scenario that causes this
// memory leak issue:

// Memory leak occurs when programmers create memory in heap form and
// forget to delete it.It takes a lot of space of our of our memory due to
// which our computer become slow and reduces the performance.

// We can overcome this problem by cleans up memory.Using AbortController
// and Using Boolean Flag is method to do the same.





// Explain reducer as pure function in redux

// In Redux, a reducer is a pure function that takes an action and the
// previous state of the application and returns the new state. 
// The action describes what happened and reducer's job is to return the new
// state based on that action.




// Why do we use redux thunk?

// Redux Thunk is a middleware that lets you call action creators thatreturn a function instead of an action object. 
// That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions 
// inside the function's body once the asynchronous operations have been completed.