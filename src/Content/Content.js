import React from 'react'
import { 
        // Route, Switch, 
        useParams } from 'react-router-dom'

        
import LaptopContext from '../context/LaptopContext'

// import Filtered from './Filtered'
// import Main from './Main'
 
// import serviceData from '../data/services.json'



function Content() {
   const context = React.useContext(LaptopContext)

    let {brandSlug, serviceSlug} = useParams()

    let filter = brandSlug || serviceSlug

    // let [filteredCompanies, setFilteredCompanies] = React.useState([])
 
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
 
   
    // React.useEffect( () => { 
    //     let newList = []
    //     laptops.map( (item) => {
    //         if(brand) {
    //            item.brand.map( (brandId) => {
    //                 if(brandId === activeBrand.id) {
    //                     newList.push(item)
    //                     console.log(filteredCompanies)
    //                 }
    //            })
    //         }
    //         if(service) {
    //             console.log(service)
    //         }
    //     })
    //     setFilteredCompanies(newList)
        
    // }, filter ) 


  

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
        return newList.map( (item, index) => (
            <div key={index} className='border border-primary p-3 mb-3'>
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
    }

    return (
        <div className='bg-white border border-primary p-3'>

            <h3>
                { filter }
            </h3> 
            {
                renderItems()
            }
         
        </div>
    )
}

export default Content
