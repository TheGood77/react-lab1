// import React, {useState} from "react";
import { Navigation } from "./header/navbar";
import navigationItems from './data/navigation-items';
import Banner from "./banner/banner";
import Button from "./button/button";
import illustration from './assets/images/ic_first_banner.png';
import illustration_second from './assets/images/ic_second_banner.png';
import illustration_third from './assets/images/ic_third_banner.png';
import CardScreen from "./cardsScreen/cardsScreen";
import { servicesGridCards } from './data/card-items';
import { articlesGridCards } from './data/card-items';
import Card from "./card/card";
import style from "./card/card.module.scss";
import downArrow from './assets/images/ic_down_arrow.svg';
import Reviews from "./reviews/reviews";
import { useState } from "react";
import rightArrow from './assets/images/ic_right_arrow.svg';

function App() {
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalCards(!showAdditionalCards);
  }

  const cards = articlesGridCards.map((item, index) => {
    return <Card
      key={`article_card_${index}`}
      image={item.image}
      imageFull={true}
      title={item.title}
      description={item.description}
      button={item.button}
      arrowButton={rightArrow}
    />
  })


  return (
    <>
      <Navigation
        logoText='HealthCare'
        items={navigationItems} />
      <Banner
        title='Virtual healthcare for you'
        content='Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
        button={
          <div style={{ paddingTop: '40px' }}>
            <Button type='primary' text="Consult Today" />
          </div>
        }
        illustration={illustration} />
      <CardScreen
        title='Our services'
        description='We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health'
        button={<Button text='Learn more' />}>

        {
          servicesGridCards.map((item, index) => {
            return <Card
              key={`service_card_${index}`}
              image={item.image}
              title={item.title}
              description={item.description} />
          })
        }
      </CardScreen>
      <Banner
        separator={true}
        type='reverse'
        title='Leading healthcare providers'
        content='We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
        button={
          <div style={{ paddingTop: '40px' }}>
            <Button text="Learn more" />
          </div>
        }
        illustration={illustration_second} />

      <Banner
        separator={true}
        title='Download our mobile apps'
        content='Our dedicated patient engagement app and
        web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
        button={
          <div style={{ paddingTop: '20px' }}>
            <Button text='Download' content={
              <img className={style.img}
                src={downArrow}
                width={15}
                height={15}
                alt='arrow-down'
              />
            } />
          </div>
        }
        illustration={illustration_third} />
      <Reviews />
      {
        <div>
          <CardScreen
            type='right'
            title='Check out our latest article'
            children={showAdditionalCards ? [cards, cards] : cards}
            button={
              <Button
                text={showAdditionalCards ? 'Hide' : 'View all'}
                onClick={handleButtonClick}
              />
            }
          />
        </div>
      }
    </>

  );
}

export default App;