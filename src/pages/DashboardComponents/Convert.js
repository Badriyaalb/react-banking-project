import React from 'react';
import money from './../../image/money.webp';

class Convert extends React.Component{
    state={
        aed:'',
        convertTo:'',
        usdAmount:'',
        gbpAmount:'',
        euroAmount:'',
    }

    convertCurrency = ()=>{
        if(this.state.convertTo=="USD"){
            this.setState({
                usdAmount: this.state.aed/3.8
            });
        } else if (this.state.convertTo=="GBP"){
            this.setState({
                gbpAmount: this.state.aed/4.4
            });
        }else {
            this.setState({
                euroAmount: this.state.aed/3.9
            });
    }}
render(){
    return(
        <div className="dashsectioncolor">
    <section id="currencyamount">
        <h1 className="sectionhead">Currency Conversion</h1>
        <section id="currencyflex"><div>
        <input id="amount1" type="number" 
        placeholder="Amount" name="Amount1" required minlength="1" 
        onChange={(e)=>{this.setState({aed:e.target.value})}}/><br/>
        <select name="Currency1" id="Currency1" required 
        onChange={(e)=>{this.setState({convertTo:e.target.value})}}>
            

                <option selected disabled>Choose a currency</option>
                <option value="GBP"> GBP</option>
                <option value="USD"> USD</option>
                <option value="EURO">EURO</option>
        </select><br/>
        <button id="Convbtn" onclick="myFunction()" 
        onClick={this.convertCurrency}>Convert</button><br/>
        
        
        
        </div>
        <div>
           <img id="imgmoney" src={money}/>
            <h1 id="convertrslt">
            Result:{this.state.convertTo=="USD"? this.state.usdAmount: this.state.convertTo=="GBP"?  this.state.gbpAmount : this.state.euroAmount} AED
            </h1>
        </div>
    </section>
        <hr id="underline"/>
    </section>
    </div>
    );
}}
export default Convert;