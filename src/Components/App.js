import '../CSS/App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import ArticleDetails from './ArticleDetails';
import FilterNav from './FilterNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filteredArticles: [],
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qjaCX4knVimJGIdJG6yYQCNckp0u0BgG')
      .then(res => res.json())
      .then(data=> {
        this.setState({articles: data.results})
        this.setState({filteredArticles: data.results})
      })
      .catch(err => this.setState({error: err}))
  }

  filterArticles = (searchPhrase) => {
    const filteredArticles = this.state.articles.filter(article => {
      return article.title.toLowerCase().includes(searchPhrase.toLowerCase()) || article.abstract.toLowerCase().includes(searchPhrase.toLowerCase())
    })

    this.setState({filteredArticles: filteredArticles})
  }

  render() {
    return (
      this.state.articles.length > 0 ?
      <main>
        <h1 className='title'>New York Times Top Stories</h1>
        <FilterNav filterArticles={this.filterArticles}/>
        {!this.state.filteredArticles.length ? 
          <h2 className='error'>Nothing matches your search</h2>: 
          <Routes>
            <Route exact path='/' element={<SectionContainer articles={this.state.filteredArticles} /> } /> 
            <Route path='/:uri' element={<ArticleDetails articles={this.state.articles}/> } />
          </Routes>
        }
      </main>:
      <h1 className='loading'>Loading...</h1>
    );
  }
}

export default App;
