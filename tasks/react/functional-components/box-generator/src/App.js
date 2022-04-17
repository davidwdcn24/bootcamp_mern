import React, { useReducer } from 'react';
import './App.css';
import Boxes from './components/boxes/Boxes';
import Form from './components/form/Form';

const initialState = {
  colors: ["#ff0000", "#0500ff", "#ad00ff"],
  len: 100
}

const reducer = (state, action) => {
  return {
      ...state,
      [action.name]: action.value
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateColors = (value) => {
    const newColors = state.colors;
    newColors.push(value);
    dispatch({
      name: "colors",
      value: newColors
    })
  }

  const updateLen = (value) => {
    console.log("len", value);
    dispatch({
      name: "len",
      value: value
    })
  }

  return (
    <div className="App">
      <Form onSetColors={updateColors} onSetLen={updateLen}></Form>
      <Boxes colors={state.colors} len={state.len}></Boxes>
    </div>
  );
}

export default App;
