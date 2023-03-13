
function Buttonmenu(){
    return(
        <section id="Buttonmenu">
        <div>
        <button className="menubuttons" onclick="myFunction()">Card Details</button>
        <br/></div>
        <div>
        <button className="menubuttons" onclick="myFunction()">Currency Conversion</button>
        <br/></div>
        <div>
        <button id="Logoutbutton" onclick="myFunction()">Logout</button>
        <br/></div>
        </section>
    );
}
export default Buttonmenu;