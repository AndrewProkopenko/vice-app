import React from 'react'
 
import LaptopContext from '../context/Laptops/LaptopContext'
 
import Content from '../Content/Content' 
import Sidebar from '../Sidebar/Sidebar' 

function LaptopsApp() {
 
    const context = React.useContext(LaptopContext) 
     
    return ( 
        <div className='container'>
            <h1 className='my-5'>
                { context.getHeadingString() }
            </h1> 
            <div className='row'>
                <div className='col-12 col-md-3'> 
                    <Sidebar
                        context={context}
                        typeProdUrl='uslugi/remont-noutbukov'
                        typeProd='laptops'
                    /> 
                </div>
                
                <div className='col-12 col-md-9'> 
                    <Content context={context}  />
                </div>
            </div> 
        </div>  
    )
}

export default LaptopsApp
