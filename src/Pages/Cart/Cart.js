import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Cart.css'
import NavLeft from '../../Components/NavLeft/NavLeft.js'
import ToggleMobileMenu from '../../Components/ToggleMobileMenu/ToggleMobileMenu.js'
import NavRight from '../../Components/NavRight/NavRight.js'
import Banner from '../../Components/Banner/Banner.js'
import cartBanner from '../../img/cart-banner.jpg'
import CartItem from './CartItem.js'
import Headings from './Headings.js'
import Footer from '../../Components/Footer/Footer.js'

class Cart extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cartItems: [],
			removedItem: null
		}
	}

	componentWillMount() {
		this.getCartItems()
	}
	getCartItems = () => {
		let cartItems = Array.from(localStorage).map((item, index) =>
			JSON.parse(localStorage.getItem(localStorage.key(index))))
		this.setState({ cartItems })
	}
	getCartTotal = () => {
		let { cartItems } = this.state
		if (cartItems.length) {
			let currencyFormatter = new Intl.NumberFormat('en-US',
				{
					style: 'currency',
					currency: 'USD',
					minimumFractionDigits: 2,
				})
			let cartTotal = cartItems.map(item => item.total).reduce((a, b) => a + b)
			let cartSubTotal = currencyFormatter.format(cartTotal)
			let discount = cartItems.find(item => item.couponUsed)
			let formattedCartTotal
			let subtotalDiv = document.querySelector('div.subtotal-value')
			let discountText = document.querySelector('span.discount')
			if (discount) {
				formattedCartTotal = currencyFormatter.format(0.75 * cartTotal)
				subtotalDiv.style.textDecorationLine = 'line-through'
				discountText.style.display = 'block'
			} else {
				formattedCartTotal = cartSubTotal
			}
			let totalDiv = document.querySelector('div.total-value')
			totalDiv.innerHTML = formattedCartTotal
			subtotalDiv.innerHTML = cartSubTotal
		}
	}
	componentDidMount() {
		this.getCartTotal()
	}
	componentDidUpdate() {
		this.showUndo()
		this.getCartTotal()
	}
	showEmptyCart = () => {
		let { removedItem } = this.state
		return removedItem ? (
			<div>
				{this.renderNavAndBanner()}
				<div className='empty-cart'>
					<div className='undo'>
						<FontAwesome name='fas fa-check-circle' />
						{`"${removedItem.name}" removed.`}
						<span onClick={this.handleUndo}>Undo?</span>
					</div>
					<p>Your cart is currently empty.</p>
					<NavLink to='/shop'>
						<button>return to shop<FontAwesome name='arrow-right' /></button>
					</NavLink>
				</div>
				{this.renderFooter()}
			</div>
		)
			:
			<div>
				{this.renderNavAndBanner()}
				<div className='empty-cart'>
					<p>Your cart is currently empty.</p>
					<NavLink to='/shop'>
						<button>return to shop<FontAwesome name='arrow-right' /></button>
					</NavLink>
				</div>
				{this.renderFooter()}
			</div>
	}
	showUndo = () => {
		let { removedItem, cartItems } = this.state
		let undoDiv = document.querySelector('div.undo')
		if (!undoDiv) {
			this.showEmptyCart()
		}
		let checkMark = document.querySelector('span.fa-check-circle')
		let removedItemText = document.querySelector('span.remove-item-txt')
		if (removedItemText)
			undoDiv.removeChild(removedItemText)
		if (removedItem) {
			removedItemText = document.createElement('span')
			removedItemText.setAttribute('class', 'remove-item-txt')
			removedItemText.innerText = `"${removedItem.name[0].toUpperCase()}${removedItem.name.substring(1)}" removed.`
			if (cartItems.length)
				checkMark.insertAdjacentElement('afterend', removedItemText)
			undoDiv.style.display = 'block'
		}
	}
	handleUndo = () => {
		let { removedItem } = this.state
		let undoDiv = document.querySelector('div.undo')
		undoDiv.style.display = 'none'
		localStorage.setItem(removedItem.name, JSON.stringify(removedItem))
		this.setState({ removedItem: null })
		this.getCartItems()
	}
	handleDeleteItem = name => {
		let filteredItems = this.state.cartItems.filter(cartItem => cartItem.name !== name)
		const itemToRemove = this.state.cartItems.find(cartItem => cartItem.name === name)
		localStorage.removeItem(name)
		this.setState({
			cartItems: filteredItems,
			removedItem: itemToRemove
		})
	}
	handleQuantityChange = (event, name) => {
		let { cartItems } = this.state
		const inputValue = Number(event.target.value)
		const invalidQty = document.querySelector('div.invalid-qty')
		if (Number.isInteger(inputValue) && inputValue > 0) {
			const cartItemsCopy = [...cartItems]
			const itemToChange = cartItemsCopy.find(item => item.name === name)
			itemToChange.quantity = inputValue
			itemToChange.total = itemToChange.price * itemToChange.quantity
			localStorage.setItem(itemToChange.name, JSON.stringify(itemToChange))
			this.getCartItems()
			invalidQty.style.display = 'none'
		} else {
			invalidQty.style.display = 'block'
		}
	}
	handleCoupon = event => {
		let { cartItems } = this.state
		let currencyFormatter = new Intl.NumberFormat('en-US',
			{
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 2,
			})
		event.preventDefault()
		event.stopPropagation()
		let couponCodeInput = document.querySelector('input[name="coupon-code"]')
		let couponCode = couponCodeInput.value.trim()
		const invalidCouponCode = document.querySelector('p.invalid-coupon-code')
		if (/Troy/i.test(couponCode)) {
			let totalDiv = document.querySelector('div.total-value')
			let cartTotal = Number(totalDiv.innerText.substring(1))
			let newTotal = 0.75 * cartTotal
			totalDiv.innerHTML = currencyFormatter.format(newTotal)
			let cartItemsCopy = [...cartItems]
			cartItemsCopy.forEach(item => {
				item.couponUsed = true
				localStorage.setItem(item.name, JSON.stringify(item))
			})
			this.getCartItems()
			invalidCouponCode.style.display = 'none'
		} else {
			invalidCouponCode.style.display = 'block'
		}
	}
	removeItemsFromStorage = () => {
		let { cartItems } = this.state
		cartItems.forEach(item => localStorage.removeItem(item.name))
		// Of course with a real site these items would be
		// removed after a form was successfully submitted or
		// something. I just didn't want to leave this data in
		// the local storage.
		this.getCartItems()
	}
	renderNavAndBanner = () => {
		return (
			<div>
				<nav>
					<NavLeft />
					<ToggleMobileMenu />
					<NavRight />
				</nav>
				<Banner backgroundImage={cartBanner} headerText='cart' />
			</div>
		)
	}
	renderFooter = () => <Footer />
	render() {
		let { cartItems } = this.state
		return cartItems.length ? (
			<div>
				{this.renderNavAndBanner()}
				<div id='cart-container'>
					<div className='undo'>
						<FontAwesome name='fas fa-check-circle' />
						<span onClick={this.handleUndo}>Undo?</span>
					</div>
					<form id='cart'>
						{
							cartItems.map((item, index) =>
								<div key={index} >
									<Headings />
									<CartItem key={item.name} onChange={this.handleQuantityChange} onDelete={this.handleDeleteItem} {...item} />
								</div>
							)
						}
						<div className='coupon-container'>
							<input onSubmit={this.handleCoupon} name='coupon-code' placeholder='Coupon code'></input>
							<button onClick={this.handleCoupon}>apply coupon</button>
							<div className='invalid-qty'><FontAwesome name='fas fa-exclamation-circle' />Enter a whole number greater than zero.</div>
						</div>
					</form>
					<p className='invalid-coupon-code'><FontAwesome name='fas fa-exclamation-circle' />Enter a valid coupon code.</p>
					<h1>cart totals</h1>
					<div className='cart-totals-container'>
						<div className='cart-detail total'>
							<div className='cart-heading subtotal-heading'>Subtotal <span className='discount'>-25%</span></div>
							<div className='cart-value subtotal-value'>
							</div>
						</div>
						<div className='cart-detail total'>
							<div className='cart-heading'>Total</div>
							<div className='cart-value total-value'>
							</div>
						</div>
					</div>
					<button onClick={this.removeItemsFromStorage}>proceed to checkout <FontAwesome name='arrow-right' /></button>
				</div>
				{this.renderFooter()}
			</div>
		)
			: this.showEmptyCart()
	}
}

export default Cart