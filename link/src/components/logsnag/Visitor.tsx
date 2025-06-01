import { useLogSnag } from '@logsnag/react';
import { useEffect } from 'react';


export default function Visitor() {

	// Hooks
	const logSnag = useLogSnag();

	useEffect(() => {
		logSnag.track({
			event: 'visit',
			channel: 'visitors',
			description: 'Someone has visited your website',
		});
	}, []);

	return null;
}
