import React, { Fragment } from 'react';
import HeaderLogo from '../component/Header';

const Category = ({ activities, currentCategory }) => {
  const category = activities.filter(activity => activity.title === currentCategory)[0];
  const { title, summary, img, age, areas,time, materials, preparation, steps } = category;
  return (
    <Fragment>
      <HeaderLogo />
      <div className='container'>
      <h1 className='pt-3'>{title}</h1>
      <div>
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
    </Fragment>
  )
}

export default Category;