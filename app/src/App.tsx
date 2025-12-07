import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Rider from './pages/Rider';

export default function App() {

	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/rider" element={<Rider />} />
	</Routes>
}
