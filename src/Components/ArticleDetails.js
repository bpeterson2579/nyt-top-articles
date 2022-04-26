import '../CSS/ArticleDetails.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetails = ({articles}) => {

  const article = articles.find(article => {
    return article.uri.split('article')[1] === window.location.pathname
  })

  return(
    <section className='article-details'>
      <h2 className='article-title'>{article.title}</h2>
      <img src={article.multimedia[1].url} className='article-pic' alt={`${article.title} picture`}/>
      <p className='caption'>{article.multimedia[1].caption}</p>
      <div className='author-creds'>
        <p className='author'>Written {article.byline}</p>
        <h5 className='published-date'>Published Date: {article.published_date}</h5>
        <h5 className='published-date'>Updated Date: {article.updated_date}</h5>
      </div>
      <p className='abstract'>{article.abstract}</p>
      <div className='links-div'>
        <a href={article.url} className='link'>Interested in reading?</a>
        <Link to='/' className='link'>Go Back</Link>
      </div>
    </section>
  )
}

export default ArticleDetails;