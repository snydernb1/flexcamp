import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllWorkouts } from '../../store/workouts';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);



	useEffect(() => {
		dispatch(fetchAllWorkouts())
	}, [dispatch])

	return (
		<>
			<ul className='navbar'>
				<li className='navItems'>
					<NavLink exact to="/" className='navItems'>Home</NavLink>
				</li>
				{isLoaded && (
					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}
			</ul>
		</>
	);
}

export default Navigation;
