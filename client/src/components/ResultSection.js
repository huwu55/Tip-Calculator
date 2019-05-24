import React from "react";

export default (props) => {
    return (
        <div>
            Total Tip: {props.tip}
            <br/><br/>
            { props.isSplitTip && (
                <div>
                    Tip Per Person: {props.tip_per_person}
                </div>
            )}
        </div>
    );
}