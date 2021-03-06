import React from 'react'
import MetaTags from 'react-meta-tags';
 

function Price(props) {
 

    function renderTable() {
        return (  
            props.price.map( (itemPrice, index) => (
                <div key={index} >
                    <tr>
                        <td colSpan='2' className='title-row'>{itemPrice.title}</td>
                    </tr>
                    {
                        itemPrice.services.map( (item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </div>
            )) 
           
        )
    }

    return (
        <div className='container container-price'>
             <MetaTags>
                <title>{props.meta.title}</title> 
                <metNavLink name="description" content={props.meta.description} /> 
            </MetaTags>
            <h1>
                Цены
            </h1>
            <h6>
                Прейскурант на услуги по ремонту и профилактическому обслуживанию офисной и компьютерной техники
            </h6>

            <table>
                <thead>
                    <div>
                        <tr>
                            <th>Вид выполняемых работ</th>
                            <th>Стоимость</th>
                        </tr>
                    </div> 
                </thead>
                <tbody>
                    { 
                        renderTable()
                    }
                </tbody>
            </table>
           
        </div>
    )
}

export default Price
