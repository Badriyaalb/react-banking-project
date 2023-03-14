function Convert(){
    return(
    <section id="currencyamount">
        <div>
        <input id="amount1" type="number" 
        placeholder="Amount" name="Amount1" required minlength="1"/>
        <select name="Currency1" id="Currency1" required>
                <option value="AED"> AED</option>
                <option value="USD"> USD</option>
                <option value="USD"> EURO</option>
        </select><br/>
        <hr id="underline"/>
        <input id="amount2" type="number" placeholder="Amount" 
        name="Amount2" required minlength="1"/>
        <select name="Currency2" id="Currency2"placeholder="Currency" required >
                <option value="AED"> AED</option>
                <option value="USD"> USD</option>
                <option value="USD"> EURO</option>
        </select><br/>
        <button id="Convbtn" onclick="myFunction()">Convert</button><br/>
        </div>
    </section>
    );
}
export default Convert;