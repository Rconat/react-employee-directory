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
import EmployeeGrid from './components/EmployeeGrid'

// https://randomuser.me/api/?results=25
// this is the api call for 25 random users

function App() {
  const [employees, setEmployees] = useState({})
  // const [filter, setFilter] = useState('')
  // const [sort, setSort] = useState('')

  // useEffect(() => fetchEmployees(). [])

  const fetchEmployees = async () => {
    try {
      const { data } = await axios(`https://randomuser.me/api/?results=25`)
      console.log(data.results)

      setEmployees(data.results)
    }
    catch {
      alert ('No data found')
    }
  }

  // fetchEmployees()

  return (
    <div className="App">
      <Header />
        <header className="App-header">
          <Grid>
            <Sort />
            <Filter />
          </Grid>
          <EmployeeGrid>
            <Avatar {...employees}/>
            <Details {...employees}/>
          </EmployeeGrid>
        </header>
    </div>
  );
}

export default App;
