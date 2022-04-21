import { useState } from 'react';
import './App.css';
import Player from './components/player/Player'

function App() {
  const [msg, setMsg] = useState("");

  return (
    <div className="App">
      <Player setMsg={setMsg}></Player>
      <div className='alert alert-warning mt-3' style={{width: "300px"}}>{msg}</div>
    </div>
  );
}

export default App;
