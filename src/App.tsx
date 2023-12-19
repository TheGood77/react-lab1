// import React, {useState} from "react";
import { Navigation } from "./header/navbar";
import navigationItems from './data/navigation-items';
import Banner from "./banner/banner";
import Button from "./button/button";
import illustration from './assets/images/ic_first_banner.png';

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
    </>

  );
}

export default App;