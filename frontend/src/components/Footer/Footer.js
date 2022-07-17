import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
         <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
         <div className="footer__container">
             <p className="footer__copyright footer__copyright_color">&copy; {new Date().getFullYear()}</p>
             <nav>
                 <ul className="footer__links">
                     <li className="footer__link-row">
                         <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel='noreferrer'>Яндекс.Практикум</a>
                     </li>
                     <li className="footer__link-row">
                         <a href="https://github.com/yuliaiakovleva?tab=repositories" className="footer__link" target="_blank" rel='noreferrer'>Github</a>
                     </li>
                     <li className="footer__link-row">
                         <a href="https://www.facebook.com/yulia.iakovleva.moscow" className="footer__link" target="_blank" rel='noreferrer'>Facebook</a>
                     </li>
                   
                 </ul>
             </nav>
         </div>
        
    </footer>
  );
}

export default Footer;