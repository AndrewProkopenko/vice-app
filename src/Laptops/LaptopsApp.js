import React from 'react'
 
import LaptopContext from '../context/Laptops/LaptopContext'
 
import Content from '../Content/Content' 
import Sidebar from '../Sidebar/Sidebar' 

import Breadcrumbs from '../Breadcrumbs'

function LaptopsApp(props) {  
    const context = React.useContext(LaptopContext) 

    let [heading, setHeading] = React.useState('')

    const breadcrumbs = [
        {
            name: 'Главная',
            slug: '/'
        },
        {
            name: 'Услуги',
            slug: '/uslugi'
        },
        {
            name: heading,
            slug: '', 
            lastChild: true
        }
    ]
      
    function createHeading(string) {  
        setHeading(string) 
    }

    return ( 
        <div className='container'> 
            <h1 className='my-5'>
                { heading }  
            </h1> 
            <Breadcrumbs items={breadcrumbs} />
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
