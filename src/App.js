import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Example from "./Example";

export const storeReducer = (state = { count: 0, isLogged: false }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SIGNIN":
      return { ...state, isLogged: true };
    case "SIGNOUT":
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

function App() {
  const counter = useSelector((state) => state.count);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      {isLogged ? (
        <>
          <h1>Hello</h1>
          <button onClick={() => dispatch({ type: "SIGNOUT" })}>signout</button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch({ type: "SIGNIN" })}>signin</button>
        </>
      )}
      <Example />
    </div>
  );
}

export default App;
