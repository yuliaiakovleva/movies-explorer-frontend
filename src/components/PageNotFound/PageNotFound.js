import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PageNotFound.css'

function PageNotFound () {
    const history = useHistory(); 

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__link" onClick={() => history.goBack()}>Назад</Link>
    </section>
  )
}

export default PageNotFound; 