import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../Pages/Home/Home.js'
import About from '../Pages/About/About.js'
import Shop from '../Pages/Shop/Shop.js'
import Cart from '../Pages/Cart/Cart.js'
import Menu from '../Pages/Menu/Menu.js'
import Blog from '../Pages/Blog/Blog.js'
import Contact from '../Pages/Contact/Contact.js'

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/shop' component={Shop} />
			<Route path='/cart' component={Cart} />
			<Route path='/menu' component={Menu} />
			<Route path='/blog' component={Blog} />
			<Route path='/contact' component={Contact} />
		</Switch>
	</Router>
)

export default Routes