import React , { Component } from 'react'
import LaptopContext from './LaptopContext'

import brands from '../../data/laptops/brands.json'
import services from '../../data/laptops/services.json'
import companies from '../../data/laptops/company.json'

class LaptopProvider extends Component { 

    state = {   
         brands: brands,
         services: services,
         companies: companies,
         activeBrand: [],
         activeService: [],
         title: 'Ноутбуки'
    }

    render() { 
        return (
            <LaptopContext.Provider value={ {  
                title: this.state.title,
                brands: this.state.brands,
                services: this.state.services,
                companies: this.state.companies,
                activeBrand: this.state.activeBrand,
                activeService: this.state.activeService,

                setActiveBrand: (newActiveBrand) => {
                    this.setState({
                        activeBrand: newActiveBrand
                    })
                },
                setActiveService: (newActiveService) => {
                    this.setState({
                        activeService: newActiveService
                    })
                }, 
                getHeadingString: () => { 
                    let headingString = this.state.title
                    if(this.state.activeBrand.name) {
                        headingString += ' - '
                        headingString += this.state.activeBrand.name
                    } 
                    if(this.state.activeService.name) {
                        headingString += ' - '
                        headingString += this.state.activeService.name
                    } 
                    return headingString 
                }
            } }>
                {this.props.children}
            </LaptopContext.Provider>
        )
    }

}

export default LaptopProvider; 