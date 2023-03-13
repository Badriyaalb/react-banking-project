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
            <section id="carddetails">
 
                <div>
                     <input id="Firstname" type="text" size="20"  placeholder="First Name" name="Firstname"required 
                     onChange={this.changeFirstName}/>
                     <br/>

                     <input id="Lastname" type="text" onclick="Lastname()"placeholder="Last Name" name="Lastname" required
                     onChange={this.changeLastName}/>
                     <br/>
                     <button id="applybtn" onclick="myFunction()">Apply</button>
                     <br/>
                </div>
            
            
                <div id="cardi">
                 <img src={EmptyCard}/>
                 <h2 id="Firstandlastname">"{this.state.FirstName}{this.state.LastName}"</h2>
                </div>
            </section>
    );
        
    }
}

export default Carddetails;