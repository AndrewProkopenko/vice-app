import React, { Component } from 'react' 
import WasherContext from './WasherContext'

import brands from '../../data/washers/brands.json'
import services from '../../data/washers/services.json'
import companies from '../../data/washers/company.json'

export default class WasherProvider extends Component {
    
    state = {   
        brands: brands,
        services: services,
        companies: companies,
        activeBrand: [],
        activeService: [],
        title: 'Стиральные машины'
   }
    render() {
        return (
            <WasherContext.Provider value={ {  
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
            </WasherContext.Provider>
        )
    }
}
