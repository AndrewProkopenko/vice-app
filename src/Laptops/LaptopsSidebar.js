import React from 'react'

import Sidebar from '../Sidebar/Sidebar' 
import LaptopContext from '../context/Laptops/LaptopContext'

function LaptopsSidebar() {
    
    let context = React.useContext(LaptopContext) 

    return ( 
        <Sidebar
            context={context}
            typeProdUrl='laptops'
        /> 
    )
}

export default LaptopsSidebar