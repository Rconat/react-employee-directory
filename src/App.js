import { Component } from 'react'
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

class App extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    console.log('component mounted')
    axios(`https://randomuser.me/api/?results=25`)
      .then(response => this.setState ({ results: response.data.results }))
      .catch(err => console.error(err))
  }

  render() {

    console.log(this.state.results)

    return (
      <div className="App">
        <Header />
          <header className="App-header">
            <Grid>
              <Sort />
              <Filter />
            </Grid>
            <EmployeeGrid>
              <Avatar results = {this.state.results}/>
              <Details results = {this.state.results}/>
            </EmployeeGrid>
          </header>
      </div>
    );
  }
}

export default App;
