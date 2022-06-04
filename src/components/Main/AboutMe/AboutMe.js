import React from "react";
import "./AboutMe.css";
import yulia from "../../../images/author_photo.jpeg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <article className="about-me__container">
        {/* <img 
          className="about-me__photo"
          src={yulia}
          alt="портрер автора сайта"
        /> */}
        <div className="about-me__photo-container">
          <img
            className="about-me__photo "
            src={yulia}
            alt="портрер автора сайта"
          />
        </div>
        <h3 className="about-me__name">Юля</h3>
        <p className="about-me__info">Фронтенд-разработчица, 24 года</p>
        <p className="about-me__description">
          {/* Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы. */}
          Я родилась и живу в Москве. Закончила филологический факультет МГУ. 3
          года работаю в студии Либо/Либо. Занимаюсь редактированием и
          продюсированием подкастов, вхожу в список Forbes "30 до 30". Среди
          моих проектов – самый популярный подкаст об IT "Запуск завтра".
          Благодаря "Запуску" я решила попробовать свои силы в программировании
          и пошла учиться в Яндекс.Практикум.
        </p>
        <nav className="about-me__nav">
          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://www.facebook.com/yulia.iakovleva.moscow"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="about-me__link"
                href="https://github.com/yuliaiakovleva"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}

export default AboutMe;
