import '../CSS/SectionCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SectionCard = ({title, byline, picture, uri}) => {

  return(
    <Link to={`${uri}`}>
      <section className='card'>
        <img src={picture.url} className='section-card-pic'/>
        <h4 className='section-card-title'>{title}</h4>
        <h6 className='section-card-byline'>{byline}</h6>
      </section>
    </Link>
  )
}

export default SectionCard;