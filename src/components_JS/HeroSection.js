import React from "react";
import "../components_CSS/HeroSection.css";
import "../components_CSS/Button.css";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ЖДУТ ПРИКЛЮЧЕНИЙ</h1>
      <p>Чего ты ждешь?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          НАЧАТЬ
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          СМОТРЕТЬ ТРЕЙЛЕР <i className="fa fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};
