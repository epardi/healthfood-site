import React from 'react'
import './MailingList.css'

const MailingList = () => {
	return (
		<div id='mailing-list'>
			<div>
				<p>join liber. mailing list</p>
				<p>- receive liber. recipes per email -</p>
			</div>
			<input name='email' placeholder='Your email address'></input>
			<button>sign up</button> 
		</div>
	)
}

export default MailingList