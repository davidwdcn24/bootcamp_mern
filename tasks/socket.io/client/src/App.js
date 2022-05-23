import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import Chat from './components/Chat';

function App() {
  const [socket] = useState(io(":8000"));

  useEffect(() => {
    console.log("It this running.");
    socket.on("Welcome", data => console.log(data));
  }, []);

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
