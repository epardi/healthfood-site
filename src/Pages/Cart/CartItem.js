import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class CartItem extends Component {
    handleDeleteItem = () => this.props.onDelete(this.props.name)
    handleQuantityChange = event => this.props.onChange(event, this.props.name)
    render() {
        let currencyFormatter = new Intl.NumberFormat('en-US',
									{
									style: 'currency',
									currency: 'USD',
									minimumFractionDigits: 2,
									})
        return (
            <div className='cart-item'>
                <div className='cart-detail'>
                    <div className='cart-value'>
                        <FontAwesome onClick={this.handleDeleteItem} name='far fa-times' />
                    </div>
                </div>
                <div className='cart-detail'>
                    <div className='cart-value'>
                    <img src={this.props.image} alt='cart item' />
                    </div>
                </div>
                <div className='cart-detail'>
                    <div className='cart-value'>
                    {this.props.name}
                    </div>
                </div>
                <div className='cart-detail'>
                    <div className='cart-value'>
                    {currencyFormatter.format(this.props.price)}
                    </div>
                </div>
                <div className='cart-detail'>
                    <div className='cart-value'>
                        <input type='number'
                            name='quantity'
                            min='1'
                            defaultValue={this.props.quantity}
                            onChange={this.handleQuantityChange}>
                        </input>
                    </div>
                </div>
                <div className='cart-detail'>
                    <div className='cart-value'>
                    {currencyFormatter.format(this.props.total)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem