import React from 'react'

function Filtered(props) {
    return (
        <div>
            {props.type}
            <h3>
                {props.match.params[props.type]}
            </h3>
        </div>
    )
}

export default Filtered
