import '../CSS/SectionCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SectionCard = ({title, byline, url, picture}) => {

  console.log(url)

  return(
    <section className='card'>
      <img src={picture.url} className='section-card-pic'/>
      <a href={url} className='section-card-title-link'>{title}</a>
      <h6 className='section-card-byline'>{byline}</h6>
    </section>
  )
}

export default SectionCard;