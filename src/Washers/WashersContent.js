import React from 'react'

import Content from '../Content/Content'
import WasherContext from '../context/Washers/WasherContext'
 

function WashersContent() {

    let context = React.useContext(WasherContext)
  
    return (
        <div> 
            <Content context={context}  />
        </div>
    )
}

export default WashersContent
