import type { MouseEventHandler, ReactNode } from "react";


interface Props {
	href: string;
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function LinkButton(props: Props) {

	// Rendering
	const render = () => {
		return <a href={props.href} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 p-4 rounded-full bg-white text-black text-base font-medium" onClick={props.onClick}>
			{props.children}
		</a>
	}

	return render();
}