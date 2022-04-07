import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Navigation from './Components/navigation/Navigation';
import Main from './Components/main/Main';
import SubContents from './Components/sub-contents/SubContents';
import Advertisement from './Components/advertisement/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
