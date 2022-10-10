import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Pages />
		</BrowserRouter>
	);
}

export default App;
