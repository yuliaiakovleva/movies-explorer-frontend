import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <ul className="columns">
        <li className="columns__block">
          <h3 className="columns__header">Дипломный проект включал 5 этапов</h3>
          <p className="columns__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="columns__box">
          <h3 className="columns__header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="columns__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      {/* табличка с графикой */}
      <ul className="grid">
        <li className="grid__area">1 неделя</li>
        <li className="grid__area">4 недели</li>
        <li className="grid__area">Back-end </li>
        <li className="grid__area">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
