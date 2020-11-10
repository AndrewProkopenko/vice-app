import React , { Component } from 'react'
import LaptopContext from './LaptopContext'

import data from '../../data/database.json' 

class LaptopProvider extends Component { 
 

    state = {   
         brands: data.laptops.brands,
         services: data.laptops.services,
         companies: data.laptops.companies,
         activeBrand: [],
         activeService: []
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
                }
                
            } }>
                {this.props.children}
            </LaptopContext.Provider>
        )
    }

}

export default LaptopProvider; 