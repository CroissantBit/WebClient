export function getPreviousUrlWithParams(url: URL): URL {
	const previousUrl = new URL(url.toString().split('/').slice(0, -1).join('/'));
	appendSearchParams(previousUrl, url.searchParams.entries());

	return previousUrl;
}

export function getPreviousUrl(url: URL): URL {
	return new URL(url.toString().split('/').slice(0, -1).join('/'));
}

export function appendSearchParams(url: URL, params: IterableIterator<[string, string]>): URL {
	for (const [key, value] of params) {
		url.searchParams.append(key, value);
	}

	return url;
}
