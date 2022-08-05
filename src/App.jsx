import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ImageDog from './componets/ImageDog';
import ImageCat from './componets/ImageCat';

/*
function App() {
	let [count, setCount] = useState(0);

	const handleMinus = () => setCount(count - 1);

	const handleReset = () => setCount(0);

	const handlePlus = () => setCount(count + 1);

	return (
		<div className="App">
			<h1>CONTADOR: {count}</h1>
			<button onClick={handleMinus}>-1</button>
			<button onClick={handleReset}>RESET</button>
			<button onClick={handlePlus}>+1</button>
		</div>
	);
}

*/

// Renderizado condicional

const App = () => {
	/*
	const [isName, setIsName] = useState(true);

	const changeState = () => setIsName(!isName);

	return (
		<div className="App">
			<h1>{isName ? 'Soy Verdadero' : 'Eres un falso'}</h1>
			<button onClick={changeState}>Change State</button>
		</div>
	);
  */

	const [isImage, setisImage] = useState(true);

	const changeImage = () => setisImage(!isImage);

	const hideImage = () => 'nothing to show';

	return (
		<div className="App">
			<h1>Descubre lo que oculta esta imagen </h1>
			<h2>{isImage ? <ImageDog /> : <ImageCat />}</h2>
			<button onClick={changeImage}>Descubreme</button>
			<button onClick={hideImage}>Ocultame</button>
		</div>
	);
};

export default App;
