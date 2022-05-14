import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
        <h2 className="portfolio__header">Портфолио</h2>
        <nav>
            <ul className="portfolio__links">
                <li className="portfolio__row">
                    <a className="portfolio__link" href="https://github.com/yuliaiakovleva/how-to-learn" target="_blank" rel='noreferrer'>
                        <p className="portfolio__text">Статичный сайт</p>
                        <p className="portfolio__symbol">→</p>
                    </a>
                </li>
                <li className="portfolio__row">
                    <a className="portfolio__link" href="https://github.com/yuliaiakovleva/russian-travel" target="_blank" rel='noreferrer'>
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <p className="portfolio__symbol">→</p>
                    </a>
                    
                </li>
                <li className="portfolio__row">
                    <a className="portfolio__link" href="https://github.com/yuliaiakovleva/react-mesto-api-full" target="_blank" rel='noreferrer'>
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <p className="portfolio__symbol">→</p>
                    </a>
                </li>
            </ul>
        </nav>
    </section>
  );
}

export default Portfolio;
