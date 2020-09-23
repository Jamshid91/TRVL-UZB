import React, { useState } from "react";
import "../components_CSS/ModalInfo.css";

export const ModalInfo = () => {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);

  if (show) {
    return (
      <div className="modal_window">
        <div className="modal_list">
          <button className="modal-close" onClick={handleClose}>
            X
          </button>
          <h2>Добро пожаловать !</h2>
          <strong>
            Автор сайта: <p> Тожибоев Жамшид (Frontend developer)</p>
          </strong>
          <strong>
            Ключевые языки:{" "}
            <p>HTML5, CSS3, Bootsrap-4-5, JavaScriprt, React.js, GitHub </p>
          </strong>
          <strong>
            Графические редакторы:<p>Adobe Photoshop, Figma</p>
          </strong>
          <strong>
            Опыт работы: <p>1 год</p>
          </strong>
          <strong>
            Tел:<a href="tel:+998946804640">+998946804640</a>
          </strong>

          <strong>
            Email: <a href="">tojiboyev_jamshid@mail.ru</a>
          </strong>
          <strong>
            Социальные сети:
            <div className="icons-user">
              <a href="https://t.me/FWD02">
                <i class="fa fa-telegram"></i>
              </a>
              <a href="https://https://www.instagram.com/tojiboyev743/">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/jamshid.tojiboyev.71">
                <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
              </a>
            </div>
          </strong>
        </div>
      </div>
    );
  }

  return null;
};
