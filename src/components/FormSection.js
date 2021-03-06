import React from "react";
import NumofPeople from "./NumofPeople";
import TipPercentage from "./TipPercentage";

export default (props) => {
    return (
        <div id="inputs">
            Bill: $<input type="text" 
                value={props.bill}
                onChange={props.validateAndUpdateBill} 
            />
            <br/>
            <br/>
            Tip Percentage %: 
            <TipPercentage 
                validateAndUpdateTipPercentage={props.validateAndUpdateTipPercentage} 
                tipPercentage={props.tipPercentage}
            />
            <br />
            <input type="checkbox" onChange={props.updateIsSplitTip}/> Split tip?
            <br/>
            <br/>
            { props.isSplitTip && (
                <NumofPeople 
                    num_of_ppl = {props.num_of_ppl}
                    splitTip = {props.splitTipFunc}
                />
            )}
        </div>
    );
}