import '../CSS/FilterNav.css';
import React, { Component } from 'react'

class FilterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    }
  }

  handleChange = async(event) => {
    await this.setState({searchPhrase: event.target.value})
    this.props.filterArticles(this.state.searchPhrase)
  }

  render() {
    return(
      <section className='filter-nav'>
        <input 
          className='topic-search'
          type='text'
          value={this.state.searchPhrase}
          onChange={this.handleChange}
          placeholder='Search via topic'
        />
      </section>
    )
  }
}

export default FilterNav;