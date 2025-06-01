import { useLogSnag } from "@logsnag/react";
import type { MouseEventHandler, ReactNode } from "react";


interface Props {
	href: string;
	title?: string;
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function LinkButton(props: Props) {

	// Hooks
	const logSnag = useLogSnag();

	// Actions
	const onClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
		props.onClick?.(event);

		logSnag.track({
			channel: 'links',
			event: props.title || "unknown",
			description: `Someone has clicked on the "${props.title}" link`,
		});
	}

	// Rendering
	const render = () => {
		return <a href={props.href} title={props.title} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 p-4 rounded-full bg-white text-black text-base font-medium" onClick={onClick}>
			{props.children}
		</a>
	}

	return render();
}