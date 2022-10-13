import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import Recommanded from './components/Recommanded';
import './index.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Pages className='articles' />
			<Recommanded />
		</BrowserRouter>
	);
}

export default App;
