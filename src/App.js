import { useState } from 'react'
import './App.css';

// importing components
import Avatar from './components/Avatar'
import Details from './components/Details'
import Filter from './components/Filter'
import Header from './components/Header'
import Sort from './components/Sort'


function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Sort />
        <Filter />
        <Avatar />
        <Details />
      </header>
    </div>
  );
}

export default App;
