import React from 'react';
import styled from 'styled-components';
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
		<Nav className='nav-bar'>
			<Brand className='brand'>
				<SlargeLink to={'/'}>
					<BsMedium />
				</SlargeLink>
			</Brand>
			<Actions className='icons'>
				<Slink to={'/'}>
					<IoHome />
				</Slink>
				<Slink to={'/Notifications'}>
					<BsBellFill />
				</Slink>
				<Slink to={'/Bookmarks'}>
					<BsBookmarkFill />
				</Slink>
				<Slink to={'/Stories'}>
					<IoReader />
				</Slink>
			</Actions>
			<Profile className='profile'>
				<SlargeLink to={'/me'}>
					<BsPersonCircle />
				</SlargeLink>
			</Profile>
		</Nav>
	);
}

const Nav = styled.nav`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 5.48rem;
	border-right: 1.5px solid #dee2e6a0;
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

const Slink = styled(NavLink)`
	svg {
		font-size: 1.6rem;
		fill: #000;
	}
	&.active {
		svg {
			fill: #fab005;
		}
	}
`;
const SlargeLink = styled(NavLink)`
	&.nth-child(1) {
		font-size: 3rem;
	}
	svg {
		fill: #000;
	}
`;

const Brand = styled.div`
	padding-top: 2rem;
	font-size: 2.5rem;
	stroke-width: 0;
`;

const Profile = styled.div`
	padding-bottom: 1.6rem;
	font-size: 2rem;
`;

export default Navbar;
