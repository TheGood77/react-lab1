// import React, {useState} from "react";
import { Navigation } from "./header/navbar";
import navigationItems from './data/navigation-items';
import Banner from "./banner/banner";
import Button from "./button/button";
import illustration from './assets/images/ic_first_banner.png';
import CardScreen from "./cardsScreen/cardsScreen";
import servicesGridCards from './data/card-items';
import Card from "./card/card";

function App() {

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
    </>

  );
}

export default App;