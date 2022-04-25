import '../CSS/SectionContainer.css';
import React from 'react';
import SectionCard from './SectionCard';

const SectionContainer = ({articles}) => {
  const sections = articles.map((article, index) => {
    return(
      <SectionCard 
        title={article.title}
        byline={article.byline}
        picture={article.multimedia[0]}
        url={article.url}
        key={index}
      />
    )
  })

  return(
    <section>
      <h2>Articles</h2>
      {sections}
    </section>
  )
}

export default SectionContainer;
