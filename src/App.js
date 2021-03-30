import { Component } from 'react'
import axios from 'axios'
import './App.css';

// importing components
import Filter from './components/Filter'
import Header from './components/Header'
import Sort from './components/Sort'
import Grid from './components/Grid'
import Employees from './components/Employees'
import GridHeader from './components/GridHeader';

// https://randomuser.me/api/?results=25
// this is the api call for 25 random users

class App extends Component {

  state = {
    results: [],
    displayedResults: []
  }

  componentDidMount() {
    console.log('component mounted')
    axios(`https://randomuser.me/api/?results=25`)
      .then(response => this.setState ({ results: response.data.results, displayedResults: response.data.results }))
      .catch(err => console.error(err))
  }

  // on click filter the results to return all users from United States
  localEmployees = (evt) => {
    const locals = this.state.results.filter(({ location }) => location.country === 'United States')
    // console.log all remote employees
    console.log('local employees - ', locals)
    this.setState({ displayedResults: locals })
  }
  
  // on click filter the results to return all users from outside of the United States
  remoteEmployees = (evt) => {
    const remotes = this.state.results.filter(({ location }) => location.country !== 'United States')
    // console.log all remote employees
    console.log('remote employees - ', remotes)
    this.setState({ displayedResults: remotes })
  }

  render() {

    console.log(this.state.results)

    return (
      <div className="App">
        <Header />
          <header className="App-header">
            <Grid>
              <Sort />
              <Filter 
                localEmployees={this.localEmployees}
                remoteEmployees={this.remoteEmployees}
              />
            </Grid>
            <GridHeader />
            <Employees displayedResults = {this.state.displayedResults} />
          </header>
      </div>
    );
  }
}

export default App;
