import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
