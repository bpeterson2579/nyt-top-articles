import '../CSS/SectionCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SectionCard = ({title, byline, picture, uri}) => {

  const uriId = uri.split('article')[1]

  return(
    <NavLink to={`${uriId}`} className='card'>
      <img src={picture.url} className='section-card-pic'/>
      <h4 className='section-card-title'>{title}</h4>
      <h6 className='section-card-byline'>{byline}</h6>
    </NavLink>
  )
}

export default SectionCard;