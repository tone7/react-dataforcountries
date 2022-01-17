import React from "react";

const Filter = ({ onchange, filter }) => {
    return (
        <div>
            find countries <input value={filter} onChange={onchange}/>
        </div>
    )
}

export default Filter