import './Loginbox.css';
import {Link} from 'react-router-dom'

function Loginbox()
{
return(

    <section > 
                <form action="" method="post" name="loginForm" id="LoginBox">
            
                    <input type="text" placeholder="Username" name="userName" id="username" required minlength="8" maxlength="20"/><br/>  
                    
                    <input type="password" placeholder="Password" name="userPassword" id="password" required minlength="10" onkeyup="validatePassword()"/><br/> 
                    
                    <input type="checkbox"/> Save Password/<br/> 
                   
                        <p id="passwordErrorLC"></p>
                        <p id="passwordErrorUC"></p>
                        <p id="passwordErrorN"></p>
                    <Link to='/Dashboard'><input id="loginButton" type="submit" value="Log In"/><br/></Link> 
                    
                    <a href="https://digital.mashreqbank.com/onlinebanking/">Forgot Password </a><br/> 
                    <Link to='/signup'> Sign Up</Link><br/> 
                    <a href="https://www.google.com/maps/search/mashreq+bank+-+united+arab+emirates/@24.8103472,54.5004065,9z/data=!3m1!4b1"> branchs in UAE </a> 
                </form>
                
           
            </section>
            
);

}
export default Loginbox;