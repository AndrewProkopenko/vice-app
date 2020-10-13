import React , { Component } from 'react'
import LaptopContext from './LaptopContext'

import brands from '../data/brands.json'
import services from '../data/services.json'
import companies from '../data/company.json'

class LaptopProvider extends Component { 

    state = {   
         brands: brands,
         services: services,
         companies: companies,
         activeBrand: [],
         activeService: []
    }

    render() { 
        return (
            <LaptopContext.Provider value={ {  
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
                }
            } }>
                {this.props.children}
            </LaptopContext.Provider>
        )
    }

}

export default LaptopProvider; 