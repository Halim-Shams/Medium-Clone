import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import './index.css';

function App() {
	return (
		<div className='aplication'>
			<BrowserRouter>
				<Navbar />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

export default App;
