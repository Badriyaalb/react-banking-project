import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardssection from './HomeComponents/Cardssection';
import Header from './HomeComponents/Header';
import Loginbox from './HomeComponents/Loginbox';
import PlatinumElite from './../image/Platinum Elite.PNG';
import SOLITAIRE from './../image/SOLITAIRE.PNG';
import NoonVip from './../image/Noon VIP.PNG';
import CashBack from './../image/Cash Back.PNG';
import'./HomeComponents/Cardssection.css';
import Openaccount from './HomeComponents/Openaccount';
import Footer from './HomeComponents/Footer';
import cardImage from './../image/background1.png';
import Section2open from './HomeComponents/Section2open';


function Home(){
    return(
<>

<Header/>

<section id="webmiddlecontent"> 
 <Loginbox/>
 <section>
  <h1 className="chosecard"> Apply For Your Prefered Card </h1>
      
          
          <div id="Cards">
              <Cardssection imageName={SOLITAIRE} cardtitle="Solitaire" cardlinks=""/>
              <Cardssection imageName={PlatinumElite} cardtitle="Platinum Elite" cardlinks=""/>
              <Cardssection imageName={NoonVip} cardtitle="Noon Vip" cardlinks=""/>
              <Cardssection imageName={CashBack} cardtitle="Cash Back" cardlinks="" />
          </div>
 </section>
</section>
<section>
  <hr className="line"></hr>
  <Section2open/>
</section>
<Footer/>
</>
    );
}
export default Home;