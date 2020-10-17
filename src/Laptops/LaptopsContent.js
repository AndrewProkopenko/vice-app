import React from 'react'

import Content from '../Content/Content'
import LaptopContext from '../context/Laptops/LaptopContext'

function LaptopsContent() {

    let context = React.useContext(LaptopContext)
  
    return (
        <div> 
            <Content context={context}  />
        </div>
    )
}

export default LaptopsContent
