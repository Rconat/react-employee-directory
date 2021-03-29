import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

// importing components
import Avatar from './components/Avatar'
import Details from './components/Details'
import Filter from './components/Filter'
import Header from './components/Header'
import Sort from './components/Sort'
import Grid from './components/Grid'

// https://randomuser.me/api/?results=25
// this is the api call for 25 random users

function App() {
  const [employees, setEmployees] = useState({})
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  // useEffect(() => fetchEmployees(). [])

  const fetchEmployees = async () => {
    const { data } = await axios(`https://randomuser.me/api/?results=25`)
    // setEmployees(data)
  }

  return (
    <div className="App">
      <Header />
        <header className="App-header">
          <Grid>
            <Sort />
            <Filter 
              filter = {filter} 
              setFilter = {setFilter}
            />
          </Grid>
          <Avatar />
          <Details />
        </header>
    </div>
  );
}

export default App;
