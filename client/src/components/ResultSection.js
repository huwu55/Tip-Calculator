import React from "react";

export default (props) => {
    return (
        <div>
            Total Tip: {props.tip}
            <br/><br/>
            Total Amount: {props.total}
            <br/><br/>
            { props.isSplitTip && (
                <div>
                    Tip Per Person: {props.tip_per_person}
                    <br/><br/>
                    Total Per Person: {props.total_per_person}
                </div>
            )}
        </div>
    );
}