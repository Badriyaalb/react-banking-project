import './Cardssection.css';

function Cardssection(){
    return(
    <div>
        <h1 className="chosecard"> Apply For Your Prefered Card </h1>
        
        <div id="Cards">
            <div className="carddiv">
                <img src="screenshots/SOLITAIRE.PNG" alt=" SOLITAIRE" className="cardimg"/>
                <p className="cardtitles">  Solitaire </p>
                <div className="cardlinks">
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Learn more </a> <br/>
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Apply Now </a>   
                </div>  
            </div>
            <div className="carddiv">
                <img src="screenshots/Platinum Elite.PNG" alt=" Platinum Elite" className="cardimg"/>  
                <p className="cardtitles">  Platium Elite </p>  
                <div className="cardlinks">   
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Learn more </a> <br/>
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Apply Now </a>
                </div> 
            </div>
            <div className="carddiv">
                <img src="screenshots/Noon VIP.PNG" alt=" Noon VIP" className="cardimg"/>      
                <p className="cardtitles">  Noon VIP</p>  
                <div className="cardlinks">
                        <a href="https://digital.mashreqbank.com/onlinebanking/">Learn more </a> <br/>
                        <a href="https://digital.mashreqbank.com/onlinebanking/">Apply Now </a>
                </div>
            </div>
            <div className="carddiv" >
                <img src="screenshots/Cash Back.PNG" alt=" Cash Back" className="cardimg"/>   
                <p className="cardtitles">  Cash Back </p>     
                <div className="cardlinks">
                        <a href="https://digital.mashreqbank.com/onlinebanking/">Learn more </a> <br/>
                        <a href="https://digital.mashreqbank.com/onlinebanking/">Apply Now </a>
            </div>
            </div> 
        </div> 
       
    </div>
    )
    
    
    }
    export default Cardssection;