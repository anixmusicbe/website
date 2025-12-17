import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Press from './pages/Press';
import Rider from './pages/Rider';

export default function App() {

	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/rider" element={<Rider />} />
		<Route path="/press" element={<Press />} />
	</Routes>
}
