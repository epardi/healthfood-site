import React from 'react'
import './UserQuotes.css'
import personOne from '../../img/person-one.jpg'
import personTwo from '../../img/person-two.jpg'
import personThree from '../../img/person-three.jpg'

const UserQuotes = () => {
	const users = {
		'Bubi Ema':
			{
				'img': personOne,
				'quote': 'Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris."'
			},
			'Marko Lilo':
			{
				'img': personTwo,
				'quote': 'Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris."'
			},
			'Ana Doe':
			{
				'img': personThree,
				'quote': 'Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris."'
			}
	}

	return (
		<div id='user-quotes'>
			{Object.entries(users).map(([user, userInfo]) => {
				return (
					<div key={user} className='user-quote'>
						<img src={userInfo.img} alt={user} />
						<blockquote>{userInfo.quote}</blockquote>
						<p>{user}</p>
					</div>
				)
			})}
		</div>
	)
}

export default UserQuotes