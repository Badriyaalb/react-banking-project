import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardssection from './Cardssection';
import Header from './Header';
import Loginbox from './Loginbox';
import PlatinumElite from './image/Platinum Elite.PNG';
import SOLITAIRE from './image/SOLITAIRE.PNG';
import NoonVip from './image/Noon VIP.PNG';
import CashBack from './image/Cash Back.PNG';
import './Cardssection.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<>
    <Header/>
    
    <section id="webmiddlecontent"> 
     <Loginbox/>
     <section>
      <h1 className="chosecard"> Apply For Your Prefered Card </h1>
          
              
              <div id="Cards">
                  <Cardssection imageName={SOLITAIRE} cardtitle="Solitaire" />
                  <Cardssection imageName={PlatinumElite} cardtitle="Platinum Elite" />
                  <Cardssection imageName={NoonVip} cardtitle="Noon Vip" />
                  <Cardssection imageName={CashBack} cardtitle="Cash Back" />
              </div>
               
            
     </section>
    </section>
    

</>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

