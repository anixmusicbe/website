
import ButtonGroup from './components/button-group/ButtonGroup';
import LinkButton from './components/button/LinkButton';
import Logo from './components/logo/Logo';


export default function App() {

	// Rendering
	const render = () => {
		return <div className="w-full h-dvh flex flex-col items-center justify-center bg-black gap-8">
			<Logo />

			<ButtonGroup>
				<LinkButton href="https://soundcloud.com/anixmusicbe">
					<img className="size-6" src="https://unpkg.com/simple-icons@v15/icons/soundcloud.svg" />
					<span>Soundcloud</span>
				</LinkButton>
				<LinkButton href="https://www.instagram.com/anixmusicbe">
					<img className="size-4" src="https://unpkg.com/simple-icons@v15/icons/instagram.svg" />
					<span>Instagram</span>
				</LinkButton>
				<LinkButton href="https://www.tiktok.com/@anixmusicbe">
					<img className="size-4" src="https://unpkg.com/simple-icons@v15/icons/tiktok.svg" />
					<span>Tiktok</span>
				</LinkButton>
				{/* <LinkButton href="https://www.youtube.com/@anixmusicbe">
					<img className="size-5" src="https://unpkg.com/simple-icons@v15/icons/youtube.svg" />
					<span>YouTube</span>
				</LinkButton> */}
				{/* <LinkButton href="https://anix.be">
					<img className="size-4" src="https://unpkg.com/simple-icons@v15/icons/website.svg" />
					<span>Website</span>
				</LinkButton> */}
			</ButtonGroup>
		</div>
	}

	return render();
}
