import React, { Fragment } from 'react';
import Header from '../component/Header';

const Avatar = ({ }) => {
  return (
    <Fragment>
      <Header />
      <div>
        <img className='img-fluid' alt='Avatar' src={'https://www.pinclipart.com/picdir/big/0-8604_outline-human-body-body-scan-clip-art-png.png'} />
      </div>

    </Fragment>
  )
}

export default Avatar;