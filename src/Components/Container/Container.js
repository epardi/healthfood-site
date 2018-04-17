import React from 'react'
import './Container.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom'

const Container = () => {
	return (
		<div className='container'>
			<div className='column'>
				<NavLink to='/'><div id='kiwiImg'></div></NavLink>
	            <NavLink to='/'><h1>kiwi smoothie</h1></NavLink>
	            <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
	            <NavLink to='/'><p>Continue reading <FontAwesome name='arrow-right' /></p></NavLink>
			</div>
			<div className='column'>
				<div className='vertRule'></div>
			</div>
			<div className='column'>
				<NavLink to='/'><div id='papayaImg'></div></NavLink>
            	<NavLink to='/'><h1>papaya smoothie</h1></NavLink>
            	<p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
            	<NavLink to='/'><p>Continue reading <FontAwesome name='arrow-right' /></p></NavLink>
			</div>
			<div className='column'>
				<div className='vertRule'></div>
			</div>
			<div className='column'>
				<NavLink to='/'><div id='peachImg'></div></NavLink>
	            <NavLink to='/'><h1>peach smoothie</h1></NavLink>
	            <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
	            <NavLink to='/'><p>Continue reading <FontAwesome name='arrow-right' /></p></NavLink>
			</div>
		</div>
	)
}

export default Container