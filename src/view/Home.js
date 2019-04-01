import React, { Fragment } from 'react';
import HeaderLogo from '../component/Header';
import { Link } from 'react-router-dom';
import Card from '../component/Card';

const Home = ({ activities, selectCategory }) => {
  console.log(selectCategory)

  return (
    <Fragment>
      <HeaderLogo />
      <div class="jumbotron jumbotron-fluid bg-dark text-white">
        <div class="container">
          <h1 class="display-5">Recursos y material didáctico</h1>
          <p class="">
            Los estereotipos moldean cómo las personas perciben, interactúan y toman decisiones sobre otros y sobre sí mismos.
            El modo en que las personas son presentadas en los medios, cultura popular, la religión, la política pueden crear
            sesgos (generalmente de forma inconsciente) que limitan el desarrollo integral de las personas, porque reducen el
            espectro de posibilidades en las que se pueden ver reflejadas.
          </p>
          <p>
            Estas actividades están dirigidas a niños y niñas, con el propósito de explorar la identidad y roles de género,
            estereotipos, impulsando una visión saludable sobre estos temas.
          </p>
        </div>
      </div>
      <div className='container' id='resources'>
        <div className='flex-wrapper'>
          {activities.length ?
            activities.map((activity, i) => 
              <Card key={i} activity={activity} selectCategory={selectCategory} />
            )
            : <span>Cargando recursos ...</span>}
        </div>
      </div>
    </Fragment>
  )
}

export default Home;