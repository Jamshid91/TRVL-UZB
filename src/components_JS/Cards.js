import React from "react";
import { CardItem } from "./CardItem";
import "../components_CSS/Card.css";

export const Cards = () => {
  return (
    <div className="cards">
      <h1>Посмотрите эти ЭПИЧЕСКИЕ дистанции!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.adecatours.com/uploads/Hotels-of-Uzbekistan/Hotels-Charvak/Hotel-NEW/file.jpg"
              text="Чарвакский перерыв, настоящий горный воздух"
              label="Приключение"
              path="./services"
            />
            <CardItem
              src="https://www.amirsoy.com/img/post-12.jpg"
              text="Амирсой всесезонный горный курорт в Узбекистане"
              label="Люкс"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRLToPlaHemKliXMR3j2rM9g"
              text="Кумушкон истинное спокойствие и мечеть наверху"
              label="Тайна"
              path="./services"
            />
            <CardItem
              src="https://timedia.tierient.com/timg/76bb1ba2b1441ec3.jpg"
              text="Чимган наслаждайся зимой "
              label="Приключение"
              path="./services"
            />
            <CardItem
              src="https://pagetour.org/tashkent/bel/beldersay-hotel-beldersoy-u.jpg"
              text="Бельдерсай Оромгохи горный курорт"
              label="Адреналин"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnmkWFKXyNy38qaos5s5BPVNVKJfQLue3WVg&usqp=CAU"
              text="Кавардон чудесное и красивое место"
              label="Адреналин"
              path="./services"
            />
            <CardItem
              src="/images/img__1.jpg"
              text="Сукок горные тюльпаны"
              label="Тайна"
              path="./services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
