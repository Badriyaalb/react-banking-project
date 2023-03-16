import React from "react";
import EmptyCard from './../../image/Emptycreditcard.gif';

        
class Carddetails extends React.Component{

    state={
        FirstName:"First",
        LastName:"Last"
    }
    changeFirstName = (e) => {
        this.setState({FirstName:e.target.value})
    }
    changeLastName = (e) => {
        this.setState({LastName:e.target.value})
    }
    render(){
        return(
            <div className="dashsectioncolor">
            <h1 className="sectionhead">  Apply for a card </h1><br/>
            <section id="carddetails">
                
                <div id="firstlast">
                     <input id="Firstname" type="text" size="20"  placeholder="First Name" name="Firstname"required 
                     onChange={this.changeFirstName}/>
                     <br/>

                     <input id="Lastname" type="text" onclick="Lastname()"placeholder="Last Name" name="Lastname" required
                     onChange={this.changeLastName}/>
                     <br/>
                     <button id="applybtn" onclick="myFunction()">Apply</button>
                     <br/>
                </div>
            
            
                <div id="cardimg">
                 <img id="cardimg"src={EmptyCard}/>
                 <h2 id="Firstandlastname">"{this.state.FirstName}{this.state.LastName}"</h2>
                </div>
                
            </section>
            </div>

    );
        
    }
}

export default Carddetails;