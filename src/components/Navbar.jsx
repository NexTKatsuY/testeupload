import { NavLink } from 'react-router-dom';

import { SiRaspberrypi, SiElement } from 'react-icons/si';
import { GrVulnerability } from 'react-icons/gr';
import { FaThList, FaHome } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='navPages'>
				<NavLink to={'/'}>
					<FaHome />
					<span>Home</span>
				</NavLink>
				<NavLink to={'/berry'}>
					<SiRaspberrypi />
					<span>Beries</span>
				</NavLink>
				<NavLink to={'/moves'}>
					<GrVulnerability />
					<span>Moves</span>
				</NavLink>
				<NavLink to={'/types'}>
					<SiElement />
					<span>Types</span>
				</NavLink>
				<NavLink to={'/nationaldex'}>
					<FaThList />
					<span>National Dex</span>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
