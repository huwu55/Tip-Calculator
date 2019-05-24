import React from "react";
import FormSection from "./components/FormSection";
import ResultSection from "./components/ResultSection";

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            bill : 0.00,
            tipPercentage : 0,
            tip : 0,
            num_of_ppl : 0,
            tip_per_person : 0,
            isSplitTip : false
        };
    }

    // validate each time user enters a key
    validateAndUpdateBill = (event) => {
        event.preventDefault();
        
        // not allow non numerical value enter as input
        let bill = parseInt(event.target.value.replace(/[^\d]/, ''));

        if(!bill)    {
            bill = 0;
        }
        else{
            bill = (bill / 100).toFixed(2);
        }

        //console.log("bill: ", bill);
        this.setState({bill}, () => this.calcTip());
    }

    validateAndUpdateTipPercentage = (event) => {
        event.preventDefault();

        let tipPercentage = parseInt(event.target.value.replace(/[^\d]/, ''));

        if(!tipPercentage)    {
            tipPercentage = 0;
        }

        //console.log("tipPercentage: ", tipPercentage);
        this.setState({tipPercentage}, () => this.calcTip());
    }

    calcTip = () => {
        let tip = (this.state.bill * this.state.tipPercentage * 0.01).toFixed(2);
        this.setState({tip}, () => {
            if(this.state.isSplitTip && this.state.num_of_ppl !== 0){
                // console.log("tip:", this.state.tip);
                // console.log("numofppl:", this.state.num_of_ppl);
                let tip_per_person = (this.state.tip / this.state.num_of_ppl).toFixed(2);
                this.setState({tip_per_person});
            }
        });
    }

    updateIsSplitTip = () => {
        if(this.state.isSplitTip) 
            this.setState({isSplitTip: false});
        else this.setState({isSplitTip: true});
    }

    splitTip = (event) =>{
        event.preventDefault();

        let num_of_ppl = parseInt(event.target.value.replace(/[^\d]/, ''));

        console.log("num_of_ppl:", num_of_ppl);

        if(num_of_ppl && num_of_ppl !== 0){
            let tip_per_person = (this.state.tip / num_of_ppl).toFixed(2);
            this.setState({num_of_ppl, tip_per_person});
        }
        else this.setState({num_of_ppl: 0, tip_per_person : 0});
    }

    render(){
        return (
            <div>
                <FormSection 
                    bill = {this.state.bill}
                    tipPercentage = {this.state.tipPercentage}
                    num_of_ppl = {this.state.num_of_ppl}
                    isSplitTip = {this.state.isSplitTip}
                    validateAndUpdateBill = {this.validateAndUpdateBill}
                    validateAndUpdateTipPercentage = {this.validateAndUpdateTipPercentage}
                    updateIsSplitTip = {this.updateIsSplitTip}
                    splitTipFunc = {this.splitTip}
                />
                <br/>
                <ResultSection 
                    tip = {this.state.tip}
                    isSplitTip = {this.state.isSplitTip}
                    tip_per_person = {this.state.tip_per_person}
                />
            </div>
        );
    }
}

export default App;