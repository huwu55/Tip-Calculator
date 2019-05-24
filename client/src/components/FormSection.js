import React from "react";
import NumofPeople from "./NumofPeople";

export default (props) => {
    return (
        <div>
            Bill: $<input type="text" 
                value={props.bill}
                onChange={props.validateAndUpdateBill} 
            />
            <br/>
            <br/>
            Tip Percentage : <input type="text"
                value={props.tipPercentage}
                onChange={props.validateAndUpdateTipPercentage}
            />%
            <br/>
            <br/>
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