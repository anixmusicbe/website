import type { MouseEventHandler, ReactNode } from "react";


interface Props {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {

	// Rendering
	const render = () => {
		return <button className="w-full flex items-center justify-center gap-2 p-4 rounded-full bg-white text-black text-base font-medium" onClick={props.onClick}>
			{props.children}
		</button>
	}

	return render();
}