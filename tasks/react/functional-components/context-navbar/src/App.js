import { useState } from 'react';
import './App.css';
import FormWrapper from './components/form-wrapper/FormWrapper';
import Navbar from './components/nav-bar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import UserContext from './context/UserContext';

function App() {
  const [userName, setUserName] = useState("");
  return (
    <Wrapper>
      <UserContext.Provider value={{userName, setUserName}}>
        <Navbar></Navbar>
        <FormWrapper></FormWrapper>
      </UserContext.Provider>
    </Wrapper>
  );
}

export default App;
