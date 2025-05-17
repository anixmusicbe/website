import logo from '../../../public/anix_logo.svg';


export default function Logo() {

	// Rendering
	const render = () => {
		return <img className="max-w-[180px] w-[6/12]" src={logo} alt="anix_logo" />
	}

	return render();
}