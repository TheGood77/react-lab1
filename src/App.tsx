// import React, {useState} from "react";
import { Navigation } from "./header/navbar";
import navigationItems from './data/navigation-items';

function App() {

    return (
      <>
          <Navigation
              logoText='HealthCare'
              items={navigationItems}/>
        </>
    );
}

export default App;