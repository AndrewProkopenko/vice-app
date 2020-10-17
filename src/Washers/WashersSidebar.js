import React from 'react'

import Sidebar from '../Sidebar/Sidebar'  
import WasherContext from '../context/Washers/WasherContext'

function WashersSidebar() {

    let context = React.useContext(WasherContext)

    return (
        <Sidebar
            context={context}
            typeProdUrl='washers'
        /> 
    )
}
export default  WashersSidebar
