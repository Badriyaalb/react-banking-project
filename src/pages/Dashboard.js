import Carddetails from "./HomeComponents/DashboardComponents/Carddetails";

function Dashboard(){
    return(
<>
<Carddetails/>
<div id="rightcontentdash">
    
    <section id="currencyamount">
        <div>
        <input id="amount1" type="number" placeholder="Amount" name="Amount1" required minlength="1"/><br/>
        <select name="Currency1" id="Currency1" required>
                <option value="AED"> AED</option>
                <option value="USD"> USD</option>
                <option value="USD"> EURO</option>
        </select>
        <input id="amount2" type="number" placeholder="Amount" name="Amount2" required minlength="1"/><br/>
        <select name="Currency2" id="Currency2" required>
                <option value="AED"> AED</option>
                <option value="USD"> USD</option>
                <option value="USD"> EURO</option>
        </select>
        <input  type="submit" placeholder="Convert" name="Convertbutton" />
        </div>
        <div id="convertionbox">
            
        </div>
    </section>
</div>
</>
    );
}

export default Dashboard;