import React from "react";

function Carddetails(){
        return(
            <section id="carddetails">
            <div>
                <input id="Firstname" type="text" size="20" onkeypress="FirstName()"placeholder="First Name" name="Firstname" required /><br/>
                <input id="Lastname" type="text" onkeypress="Lastname()"placeholder="Last Name" name="Lastname" required /><br/>
                <input type="Submit" placeholder="Apply" name="Apply"/><br/>
            </div>
            <div id="cardpicture">
                <p id="Firstname">" "</p>
                <p id="Lastname">" "</p>
                <p>10/24      387</p><br/>
                <p>6887 4524 4456 2395</p>
            </div>
        </section>
    );
}
        

export default Carddetails;