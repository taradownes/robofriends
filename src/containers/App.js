import React, { Component }from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js'
import ErrorBoundary from "../components/Error";
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>  {
        setTimeout(() => {
          this.setState({robots: users})
        }, 1000);
      })

      
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if(!this.state.robots.length){
      return (<div className="tc"> 
        <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange ={this.onSearchChange}/>
        <h1>Loading...</h1>
    </div>
      )} else {
        return (
          <div className="tc"> 
      <h1 className="f1">Robot Friends</h1>
      <SearchBox searchChange ={this.onSearchChange}/>
    <ErrorBoundary>
      <Scroll>
         <Cardlist robots={filteredRobots}/>
      </Scroll>
  </ErrorBoundary>

    </div>
  
  );
}
}
}

export default App;