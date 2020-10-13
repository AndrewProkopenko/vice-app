import React from 'react'
import { useParams } from 'react-router-dom'

        
import LaptopContext from '../context/LaptopContext' 


function Content() {
   const context = React.useContext(LaptopContext)

    let {brandSlug, serviceSlug} = useParams()

    let headingString = brandSlug ? context.activeBrand.name : context.activeService.name
 
    React.useEffect( () => { 
        if(brandSlug) {
            context.brands.map( item => {
                if(item.slug === brandSlug) context.setActiveBrand(item)
                return 0
            })
        }
        if(serviceSlug) {
            context.services.map( item => {
                if(item.slug === serviceSlug) context.setActiveService(item)
                return 0
            })
        }
    }, [] ) 
  
    function renderItems() {
        let newList = []
        context.companies.map( (item) => {  
            if(brandSlug) {
                item.brand.map( (brandId) => { 
                     if(brandId === context.activeBrand.id) { 
                        newList.push(item)
                     }
                     return 0
                })
            }
            if(serviceSlug) {
                item.brand.map( (serviceId) => { 
                     if(serviceId === context.activeService.id) { 
                        newList.push(item)
                     }
                     return 0
                })
            }
            return 0
        })
        if(newList.length > 0)
        return newList.map( (item, index) => (
            <div key={index} className='border border-primary bg-white p-3 mb-3'>
                <h4>
                    {item.name}
                </h4>
                <p>
                    {item.description}
                </p>
                <a href={`tel:${item.phone}`}> {item.phone} </a>
                {/* <img src={item.images[0]} alt="" /> */}
                <table className='mt-3 mb-0 table table-sm table-bordered  '>
                    <thead>
                        <tr>
                            <th scope="col">Услуга</th>
                            <th scope="col">Цена</th> 
                        </tr> 
                    </thead>
                    <tbody>
                       { 
                            item.price.map( (element, index) => (
                                <tr key={index}>
                                    <td>{ element.name }</td>
                                    <td>{ element.price }</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
        ))
        return <h6 className='mt-4'>Компаний соответствующих фильру нет</h6>            
    }

    return (
        //bg-white border border-primary p-3
        <div className=''>

            <h3>
                { 
                    headingString
                }
            </h3> 
            {
                renderItems()
            }
         
        </div>
    )
}

export default Content
