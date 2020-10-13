import React from 'react'
import { useParams } from 'react-router-dom'

function Filtered(props) {
    let {brand, service} = useParams()
    return (
        <div>
            <h2>
                { brand || service }
            </h2>
            <h3>
                {props.type}
            </h3>
            <h4>
                {props.match.params[props.type]}
            </h4>
        </div>
    )
}

export default Filtered
