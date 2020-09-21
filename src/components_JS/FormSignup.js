import React from "react";
import { UseForm } from "./UseForm";

export const FormSignup = () => {
  const { handleChange, values, handleSubmit } = UseForm();
  return (
    <div className="form-content-right">
      <form className="form" onChange={handleSubmit}>
        <h1>form</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Ваше Имя
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder=" Имя"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Ваш Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Ваш Пароль
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-labe">
            Сравните пароль
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Сравните пароль"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Зарегистрироваться
        </button>
        <span className="form-input-login">
          У вас есть account? <a href="#">here</a>{" "}
        </span>
      </form>
    </div>
  );
};
