import React, { Component } from 'react'

class ErrorBoundry extends Component {

  constructor(props){
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
  }

render(){
  if(this.state.hasError){
    return (
      <div> 
           <h1>Error: Robots not Found!</h1>
      </div> 
    )
  }
  return this.props.children
}
}

export default ErrorBoundry;

