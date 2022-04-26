import '../CSS/App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import ArticleDetails from './ArticleDetails';

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
      this.state.articles.length > 0 ? 
      <main>
        <h1 className='title'>New York Times Top Stories</h1>
        <Routes>
          <Route path='/' element={<SectionContainer articles={this.state.articles} /> } />
          <Route path='/:uri' element={<ArticleDetails articles={this.state.articles}/> } />
        </Routes>
      </main>:
      <h1 className='loading'>Loading...</h1>
    );
  }
}

export default App;
