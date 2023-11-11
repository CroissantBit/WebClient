import { Connection } from '$lib/client/connection';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	let currentConnection: Connection | undefined = undefined;

	const serverIp = url.searchParams.get('ip');
	const port = url.searchParams.get('port');
	if (!serverIp || !port) {
		return currentConnection;
	}

	currentConnection = new Connection({ ip: serverIp, port: Number.parseInt(port) });
	return { currentConnection };
};
