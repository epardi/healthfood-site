import React, { Component } from 'react'
import './MenuSection.css'

class MenuSection extends Component {
    currencyFormatter = new Intl.NumberFormat('en-US',
    {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })
    render() {
        const { menuItems } = this.props
        return (
            <div className='menu-section'>
                <h1>{this.props.menuSectionHeader}</h1>
                <div className='menu-items-container'>
                    {
                        menuItems.map((item, index) =>
                            <div key={index} className='menu-item'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>{this.currencyFormatter.format(item.price)}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default MenuSection