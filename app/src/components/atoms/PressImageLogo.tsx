import { DownloadIcon } from "lucide-react";
import { downloadFile } from "../../utils/downloadFile";


interface Props {
	src: string;
	alt: string;
}

export const PressImageLogo = (props: Props) => {

	const onClick = async () => {
		await downloadFile(props.src, props.alt);
	}

	return <div className="relative w-full h-full flex items-center justify-center">
		<div className="absolute top-1 right-1">
			<div className="size-8 bg-slate-950/20 backdrop-blur-sm flex items-center justify-center cursor-pointer" onClick={onClick}>
				<DownloadIcon className="size-4 text-white" />
			</div>
		</div>
		<img src={props.src} alt={props.alt} className="w-[30%] h-full object-contain" />
	</div>
}