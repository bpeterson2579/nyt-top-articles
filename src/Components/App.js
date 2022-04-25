import '../CSS/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qjaCX4knVimJGIdJG6yYQCNckp0u0BgG')
      .then(res => res.json())
      .then(data=> this.setState({articles: data.results}))
      .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <h1 className='title'>New York Times Top Stories</h1>
    );
  }
}

export default App;
