import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardssection from './Cardssection';
import Header from './Header';
import Loginbox from './Loginbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<>
    <Header/>
    
    <section id="webmiddlecontent"> 
     <Loginbox/>
     <Cardssection/>
    </section>
    

</>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

