import React, { Fragment } from 'react';
import HeaderLogo from '../component/Header';

const Category = ({ activities, currentCategory }) => {
  const category = activities.filter(activity => activity.title === currentCategory)[0];
  console.log(category)
  const { title, summary, img, age, areas, time, materials, preparation, steps } = category;
  return (
    <Fragment>
      <HeaderLogo />
      <div className='container pt-3'>
        <div className='card'>
          <div className='card-header'>
            <h1 className=''>{title}</h1>
          </div>
          <div className='card-body'>
            <p>Recomendado para: {age}</p>
            <p>Duración: {time}</p>
            <h4>Materiales</h4>
            <p>{materials}</p>
            <h4>Áreas</h4>
            <p>{areas}</p>
            <h4>Preparación</h4>
            <p>{preparation}</p>
            <h4>Desarrollo</h4>
            <p>{steps}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Category;