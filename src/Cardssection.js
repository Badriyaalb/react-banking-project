import './Cardssection.css';



function Cardssection(props){
    return(
        <div className="carddiv">
                <img src={props.imageName} alt="" className="carding"/>
                <p className="cardtitles">  {props.cardtitle} </p>
                <div className="cardlinks">
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Learn more </a> <br/>
                     <a href="https://digital.mashreqbank.com/onlinebanking/">Apply Now </a>   
                </div>
        </div>
                  
    )
    
    
    }
    export default Cardssection;