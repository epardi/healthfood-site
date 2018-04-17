import React from 'react'
import './OurTeam.css'
import FontAwesome from 'react-fontawesome';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom'
import teamOne from '../../img/team-one.jpg'
import teamTwo from '../../img/team-two.jpg'
import teamThree from '../../img/team-three.jpg'

const OurTeam = () => {
    return (
        <div className='our-team-container'>
            <p>food lovers</p>
            <h1>our team</h1>
            <div className='our-team-columns'>
                <div className='our-team-col'>
                    <img src={teamOne} className='our-team-img' alt='team member'></img>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
                    <div>
                        <p><FontAwesome name='fas fa-envelope' />lelatim@liber.org</p>
                        <p><FontAwesome name='fab fa-twitter' /><NavLink to='/about'>@lelatim</NavLink></p>
                        <p><FontAwesome name='fas fa-mobile' size='2x' />08992 7248297</p>
                    </div>
                </div>
                <div className='our-team-col'>
                    <img src={teamTwo} className='our-team-img' alt='team member'></img>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
                    <div>
                        <p><FontAwesome name='fas fa-envelope' />timilee@liber.org</p>
                        <p><FontAwesome name='fab fa-twitter' /><NavLink to='/about'>@timilee</NavLink></p>
                        <p><FontAwesome name='fas fa-mobile' size='2x' />08992 7248297</p>
                    </div>
                </div>
                <div className='our-team-col'>
                    <img src={teamThree} className='our-team-img' alt='team member'></img>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est.</p>
                    <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est. Proin sed mi vitae velit convallis gravida imperdiet eu mauris.</p>
                    <div>
                        <p><FontAwesome name='fas fa-envelope' />bubivili@liber.org</p>
                        <p><FontAwesome name='fab fa-twitter' /><NavLink to='/about'>@bubivili</NavLink></p>
                        <p><FontAwesome name='fas fa-mobile' size='2x' />08992 7248297</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam