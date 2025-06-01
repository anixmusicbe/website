import { useLogSnag } from '@logsnag/react';
import { useEffect } from 'react';


export default function Visitor() {

	// Hooks
	const logSnag = useLogSnag();

	useEffect(() => {
		const timer = setTimeout(() => {
			logSnag.track({
				event: 'visit',
				channel: 'visitors',
				description: 'Someone has visited your website',
			});
		}, 1000);

		return () => clearTimeout(timer);
	}, []); // Empty dependency array ensures it only runs once

	return null;
}
