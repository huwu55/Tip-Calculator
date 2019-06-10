import React from "react";

export default (props) => {
    return (
        <div>
            Number of People: <input type="text" value={props.num_of_ppl} onChange={props.splitTip}></input>
            <br/><br/>
        </div>
    );
}