import type { ReactNode } from "react";


interface Props {
	children?: ReactNode;
}

export default function ButtonGroup(props: Props) {

	// Rendering
	const render = () => {
		return <div className="w-10/12 sm:w-8/12 flex flex-col gap-2">
			{props.children}
		</div>
	}

	return render();
}