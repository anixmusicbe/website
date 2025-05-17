
import ButtonGroup from './components/button-group/ButtonGroup';
import LinkButton from './components/button/LinkButton';
import Logo from './components/logo/Logo';


export default function App() {

	// Rendering
	const render = () => {
		return <div className="w-full h-dvh flex flex-col items-center justify-center bg-black gap-8">
			<Logo />

			<ButtonGroup>
				<LinkButton href="https://soundcloud.com/anixmusicbe">SoundCloud</LinkButton>
				<LinkButton href="https://www.instagram.com/anixmusicbe">Instagram</LinkButton>
				<LinkButton href="https://www.youtube.com/@anixmusicbe">YouTube</LinkButton>
				{/* <LinkButton href="https://vi.be/platform/anix">Vi.be</LinkButton> */}
			</ButtonGroup>
		</div>
	}

	return render();
}
