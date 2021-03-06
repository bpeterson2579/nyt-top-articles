import '../CSS/SectionContainer.css';
import React from 'react';
import SectionCard from './SectionCard';

const SectionContainer = ({articles}) => {
  const sections = articles.map((article) => {
    return(
      <SectionCard 
        title={article.title}
        byline={article.byline}
        picture={article.multimedia[0]}
        uri={article.uri}
        url={article.url}
        key={article.uri}
      />
    )
  })

  return(
    <section className='articles'>
      <h2 className='article-header'>Articles</h2>
      <div className='sections'>
        {sections}
      </div>
    </section>
  )
}

export default SectionContainer;
