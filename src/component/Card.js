import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ListItem = ({ activity: { title, summary, img, age, time}, selectCategory  }) => {
  console.log(selectCategory)
  return (
    <Link to={`/${title}`} className='card shadow mb-4'  onClick={() => selectCategory(title)}>
      <img src={img} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {/* <div className='card-text'>
          <p>{summary}</p>
          <p>Recomendado para: {age}</p>
          <p className='mb-0 pb-0'>Tiempo: {duration}</p>
        </div> */}
        <div className='card-text card-h'>{summary}</div>
        <p className='card-text card-h'></p>
        <p className='card-text'>Recomendado para: {age} años a más</p>
        <p className='card-text'>Duración: {time} min</p>
      </div>
    </Link >
  )
}

export default ListItem;