import { Link } from "react-router-dom";



function Openaccount(){

    return(
        <div id="openAccount">
        <h1 class="heading123" > Open a checking open account</h1>
        <p class= "aboutp2Body">
            Consider the benefits of opening a Mashreq Banking Account.
        </p> <br/>
        <Link class="linkOpenAccount" to="/signup"> Open account  </Link> <br/>
        <img id="openacountimage123" src="https://www.mashreqbank.com/-/jssmedia/Images/UAE/Personal/Products/cards/cashback.ashx?h=227&iar=0&w=355&hash=FEBB1B27698825B37D3268516B768EFF" alt=" openaccountimg" class="openaccountimg"/>
        

    </div>
    );
}

export default Openaccount;