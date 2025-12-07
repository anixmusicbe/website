import { faInstagram, faSoundcloud, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";


const M = (props: { children: ReactNode }) => {
	return <span className="text-red-500">
		{props.children}
	</span>
}

export default function PressKit() {

	return <div className="flex flex-col gap-12">
		<div className="flex flex-row items-center justify-between">
			<div className="text-xl font-snasm">Press kit:</div>
			<div className="text-xl font-snasm">anix</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Bio</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">
					<M>Anix</M> brings pure <M>passion</M> and <M>high energy</M> to every performance, blending <M>dancefloor</M> Drum & Bass and <M>Jump Up</M> into a seamless and unforgettable experience.
				</div>

				<div className="text-base font-snasm lowercase">
					From his debut festival set at <M>Pukkelpop's</M> Buzz Stage to hyping up crowds at <M>First Bass</M>, <M>High Rollerz</M>, and <M>Verkiezingen Diepenbeek</M>, Anix continues to push the boundaries of his sound.
				</div>

				<div className="text-base font-snasm lowercase">
					Known for his <M>4-deck</M> mixes and unexpected transitions, he delivers sets full of <M>movement</M>, <M>creativity</M>, and <M>moments</M> that keep the crowd locked in from start to finish.
				</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Socials</div>

			<div className="flex flex-row gap-2 text-slate-400">
				<a href="https://soundcloud.com/anixmusicbe" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faSoundcloud} size="lg" />
				</a>
				<a href="https://www.instagram.com/anixmusicbe" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} size="lg" />
				</a>
				<a href="https://www.tiktok.com/@anixmusicbe" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faTiktok} size="lg" />
				</a>
				<a href="https://www.youtube.com/@anixmusicbe" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faYoutube} size="lg" />
				</a>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Press pictures</div>

			<div className="grid grid-cols-3 gap-1">
				<img src="/public/press/2025/DSC01999.jpg" alt="Press picture 1" className="w-full h-full object-cover" />
				<img src="/public/press/2025/DSC02018.jpg" alt="Press picture 2" className="w-full h-full object-cover" />
				<img src="/public/press/2025/DSC02020.jpg" alt="Press picture 3" className="w-full h-full object-cover" />

				<img src="/public/press/2025/no-bg/DSC01999.png" alt="Press picture 1 - No background" className="bg-slate-50 w-full h-full object-cover" />
				<img src="/public/press/2025/no-bg/DSC02018.png" alt="Press picture 2 - No background" className="bg-slate-50 w-full h-full object-cover" />
				<img src="/public/press/2025/no-bg/DSC02020.png" alt="Press picture 3 - No background" className="bg-slate-50 w-full h-full object-cover" />
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Logo</div>

			<div className="grid grid-cols-2 gap-1">
				<div className="w-full aspect-video bg-slate-950 flex items-center justify-center">
					<img src="/public/logo/anix-white.svg" alt="Anix" className="w-[30%] h-full object-contain" />
				</div>
				<div className="w-full aspect-video bg-slate-50 flex items-center justify-center">
					<img src="/public/logo/anix-black.svg" alt="Anix" className="w-[30%] h-full object-contain" />
				</div>
			</div>
		</div>
	</div>
}