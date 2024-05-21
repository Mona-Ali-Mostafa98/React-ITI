import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Products from './components/products/Products';
import Slider from './components/Slider';
import Footer from './components/Footer';

export function App() {
	return (
		<>


			<Header />
			<Slider />
			<Products />
			<Footer/>
		</>
	);
}

export default App ;