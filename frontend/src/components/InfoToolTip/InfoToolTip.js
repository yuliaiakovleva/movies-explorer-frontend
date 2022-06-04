import React from "react";
import "./InfoToolTip.css";

function InfoToolTip(props) {


  return (
    <section className={`error ${props.visibility}`}>
      <div className="error__container">
        <p className="error__message">
         {props.info}
        </p>
        <button
        className="error__close-btn"
        type="reset"
        onClick={props.onClose}
      >ЗАКРЫТЬ</button>
      </div>
    </section>
  );
}

export default InfoToolTip;
