import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">Технологии</h2>
      <div className="container">
        <h3 className="container__header">7 технологий</h3>
        <p className="container__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__grid">
          <li className="techs__square">HTML</li>
          <li className="techs__square">CSS</li>
          <li className="techs__square">JS</li>
          <li className="techs__square">React</li>
          <li className="techs__square">Git</li>
          <li className="techs__square">Express.js</li>
          <li className="techs__square">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
