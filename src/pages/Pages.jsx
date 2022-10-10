import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Notifications from './Notifications';
import Saved from './Saved';
import Stories from './Stories';
import Profile from './Profile';

function Pages() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Notifications' element={<Notifications />} />
			<Route path='/Bookmarks' element={<Saved />} />
			<Route path='/Stories' element={<Stories />} />
			<Route path='/me' element={<Profile />} />
		</Routes>
	);
}

export default Pages;
