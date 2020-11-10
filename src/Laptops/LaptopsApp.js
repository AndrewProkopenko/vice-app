import React from 'react'
 
import LaptopContext from '../context/Laptops/LaptopContext'
 
import Content from '../Content/Content' 
import Sidebar from '../Sidebar/Sidebar' 

function LaptopsApp(props) {
 
    const context = React.useContext(LaptopContext) 

    let [heading, setHeading] = React.useState('')
      
    function createHeading(string) {  
        setHeading(string) 
    }

    return ( 
        <div className='container'> 
            <h1 className='my-5'>
                { heading }  
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
                    <Content 
                        context={context} 
                        meta={props.meta}
                        createHeading={createHeading}  
                    />
                </div>
            </div> 
        </div>  
    )
}

export default LaptopsApp
