import React, { Fragment } from 'react';
import HeaderLogo from '../component/Header';
import { Link } from 'react-router-dom';

const Collaborater = () => {
  return (
    <Fragment>
      <HeaderLogo />
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 mt-3">
            <form>
              <div className="d-flex">
                <div className="form-group col-7">
                  <label for="title">Título</label>
                  <input className="form-control" id="title" placeholder="título" />
                </div>
                <div className="form-group col-5">
                  <label for="image">Seleccionar imagen</label>
                  <input type="file" className="form-control-file" id="image" aria-describedby="fileHelp" />
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group col-6">
                  <label for="age">Edad</label>
                  <input type="number" name="age" min="0" max="100" className="form-control" id="age" />
                </div>
                <div className="form-group col-6">
                  <label for="hours">Duración</label>
                  <input type="number" name="hours" min="0" max="100" className="form-control" id="hours" />
                </div>
              </div>
              <div className="form-group col-12">
                <label for="materials">Materiales</label>
                <textarea className="form-control" id="materials" rows="3"></textarea>
              </div>
              <div className="form-group col-12">
                <label for="areas">Áreas</label>
                <textarea className="form-control" id="areas" rows="3"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Collaborater;