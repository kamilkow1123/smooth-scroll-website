import Navbar from './components/Navbar';
import './style/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
		</Router>
	);
}

export default App;
