import React from 'react'
import './BlogSideSpecials.css'
import pumpkinCake from '../../img/pumpkin-pie.jpg'
import fitnessSmoothie from '../../img/fitness-smoothie.jpg'
import freshSmoothie from '../../img/smoothie2.jpg'
import { NavLink } from 'react-router-dom'

const BlogSideSpecials = () => {
    return (
        <div className='specials-side'>
            <NavLink to='/blog'><h3>pumpkin cake</h3></NavLink>
            <img src={pumpkinCake} alt='pumpkin cake' />
            <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est, sodales luctus arcu, ac placerat nunc</p>
            <hr></hr>
            <NavLink to='/blog'><h3>fitness smoothie</h3></NavLink>
            <img src={fitnessSmoothie} alt='fitness smoothie' />
            <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est, sodales luctus arcu, ac placerat nunc</p>
            <hr></hr>
            <NavLink to='/blog'><h3>fresh smoothie</h3></NavLink>
            <img src={freshSmoothie} alt='fresh smoothie' />
            <p>Cras sodales luctus arcu, ac placerat nunc sagittis a. In at turpis ac nibh luctus sagittis in ut est, sodales luctus arcu, ac placerat nunc</p>
        </div>
    )
}

export default BlogSideSpecials