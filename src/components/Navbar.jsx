import React from 'react';
import styled from 'styled-components';
import '../index.css';
import {FiHome, FiBell, FiBookmark} from 'react-icons/fi';
import {TiHome} from 'react-icons/ti';
import {
	BsMedium,
	BsPersonCircle,
	BsBellFill,
	BsBookmarkFill,
} from 'react-icons/bs';
import {IoReaderOutline, IoReader, IoHome} from 'react-icons/io5';
import {NavLink} from 'react-router-dom';

function Navbar() {
	return (
		<nav className='nav-bar'>
			<div className='brand'>
				<NavLink to={'/'}>
					<BsMedium />
				</NavLink>
			</div>
			<div className='icons'>
				<NavLink
					to={'/'} end
					className={({isActive}) => (isActive ? 'isActive' : null)}>
					<IoHome />
				</NavLink>
				<NavLink
					to={'/Notifications'}
					className={({isActive}) => (isActive ? 'isActive' : null)}>
					<BsBellFill />
				</NavLink>
				<NavLink
					to={'/Bookmarks'}
					className={({isActive}) => (isActive ? 'isActive' : null)}>
					<BsBookmarkFill />
				</NavLink>
				<NavLink
					to={'/Stories'}
					className={({isActive}) => (isActive ? 'isActive' : null)}>
					<IoReader />
				</NavLink>
			</div>
			<div className='profile'>
				<NavLink to={'/me'}>
					<BsPersonCircle />
				</NavLink>
			</div>
		</nav>
	);
}

// const Nav = styled.nav`
// 	margin: 0;
// 	padding: 0;
// 	position: absolute;
// 	height: 100vh;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 5.48rem;
// 	border-right: 1.5px solid #dee2e6a0;
// `;

// const div = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 2.5rem;
// `;

// const NavLink = styled(NavLink)`
// 	&.active {
// 		svg {
// 			fill: #fab005;
// 		}
// 	}
// `;
// const SlargeLink = styled(NavLink)`
// 	&.nth-child(1) {
// 		font-size: 3rem;
// 	}
// 	svg {
// 		fill: #000;
// 	}
// `;

// const Brand = styled.div`
// 	padding-top: 2rem;
// 	font-size: 2.5rem;
// 	stroke-width: 0;
// `;

// const Profile = styled.div`
// 	padding-bottom: 1.6rem;
// 	font-size: 2rem;
// `;

export default Navbar;
