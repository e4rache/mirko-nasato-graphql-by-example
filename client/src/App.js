import React, { Component } from 'react';
import './App.css';




class App extends Component {

  loadGreeting = async () => {
    console.log('about to fetch')
    const response = await fetch('http://localhost:9000/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: '{ greeting }' })
    })

    const responseBody = await response.json()
    return responseBody.data.greeting
  }

  render() {
    console.log('about to load greeting')
    this.loadGreeting()
    return (
      <div className="App">
        <p className="App-intro">
          mOof
        </p>
      </div>
    );
  }
}

export default App;
