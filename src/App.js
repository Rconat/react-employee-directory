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
import ShowAll from './components/ShowAll'

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

  // on click sort the results by last name
  employeesByName = (evt) => {
    const eByName = this.state.results.sort(function(a, b) {
      var nameA = a.name.last;
      var nameB = b.name.last;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    console.log(eByName)
    this.setState({ displayedResults: eByName })
  }

  // on click sort the results by age
  employeesByAge = (evt) => {
    const eByAge = this.state.results.sort(function(a, b) {
      return a.dob.age - b.dob.age
    })
    console.log(eByAge)
    this.setState({ displayedResults: eByAge })
  }

  // on click sort the results by gender
  employeesByGender = (evt) => {
    const eByGender = this.state.results.sort(function(a, b) {
      var genderA = a.gender;
      var genderB = b.gender;
      if (genderA < genderB) {
        return -1;
      }
      if (genderA > genderB) {
        return 1;
      }
      return 0;
    })
    console.log(eByGender)
    this.setState({ displayedResults: eByGender })
  }

  // on click show all employees
  showAllEmployees = (evt) => {
    this.setState({ displayedResults: this.state.results })
  }

  render() {

    console.log(this.state.results)

    return (
      <div className="App">
        <Header />
          <header className="App-header">
            <Grid>
              <Sort 
                employeesByName={this.employeesByName}
                employeesByAge={this.employeesByAge}
                employeesByGender={this.employeesByGender}
              />
              <ShowAll 
                showAllEmployees={this.showAllEmployees}
              />
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
