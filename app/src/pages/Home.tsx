import logo from '../../public/anix_logo.svg';

export default function Home() {

	return <div className="w-full h-dvh flex items-center justify-center bg-black">
		<img className="max-w-[200px] w-[8/12]" src={logo} alt="anix_logo" />
	</div>
}
