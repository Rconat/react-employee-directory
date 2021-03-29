import { useState } from 'react'
import './App.css';

// importing components
import Avatar from './components/Avatar'
import Details from './components/Details'
import Filter from './components/Filter'
import Header from './components/Header'
import Sort from './components/Sort'

// https://randomuser.me/api/?results=25
// this is the api call for 25 random users

function App() {
  const [user, setUser] = useState({})
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  return (
    <div className="App">
      <Header />
        <header className="App-header">
          <Sort />
          <Filter 
            filter = {filter} 
            setFilter = {setFilter}
          />
          <Avatar />
          <Details />
        </header>
    </div>
  );
}

export default App;
