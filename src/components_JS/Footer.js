import React from "react";
import { Button } from "./Button";
import "../components_CSS/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Подпишитесь на информационный бюллетень Adiventure, чтобы получать
          наши лучшие предложения на отпуск
        </p>
        <p className="footer-subscription-text">
          Вы можете отказаться от подписки в любое время
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              footer-input
              type="email"
              placeholder="Ваш Email"
            />
            <Button buttonStyle="btn--outline">Подписывайся</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>О нас</h2>
            <Link to="/sign-up">Как это устроено</Link>
            <Link to="/">Отзывы</Link>
            <Link to="/ ">Карьера</Link>
            <Link to="/ ">Инвесторам</Link>
            <Link to="/ ">Условия использования</Link>
          </div>
          <div className="footer-link-items">
            <h2>Связаться с нами</h2>
            <Link to="/">Контакт</Link>
            <Link to="/">Служба поддержки</Link>
            <Link to="/ ">Направления</Link>
            <Link to="/ ">Спонсорство</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Ролики</h2>
            <Link to="/">Отправить видео</Link>
            <Link to="/ ">Карьера</Link>
            <Link to="/ ">Послы</Link>
            <Link to="/ ">Агентство</Link>
            <Link to="/ ">Инфлюенсер</Link>
          </div>
          <div className="footer-link-items">
            <h2>Социальные сети</h2>
            <Link to="/">Instagram</Link>
            <Link to="/ ">Facebook</Link>
            <Link to="/ ">Youtube</Link>
            <Link to="/ ">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <span className="footer-logo-text">UZBEKISTAN</span>
              {/* <i className="fa fa-braille" /> */}
            </Link>
          </div>
          <small className="website-rights">
            Created by Jamshid <i class="fa fa-heart"></i> 2020
          </small>
          <div className="social-icons">
            <Link to="/" target="_blank" aria-label="Facebook">
              <i class="fa fa-facebook social-icon"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram">
              <i class="fa fa-instagram social-icon"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Youtube">
              <i class="fa fa-youtube-play social-icon"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter">
              <i class="fa fa-twitter social-icon"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
