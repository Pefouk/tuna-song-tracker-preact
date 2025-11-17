import './style.css';
import { render } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { SongCard } from './components/SongCard/SongCard';

// Todo move in config file
const DEFAULT_TIMEOUT = 500;

export function App() {
	const [shouldFetchData, setShouldFetchData] = useState(true);
	const data = useRef<SongData>(null);
	// Pretty much doesn't work for now :(
	const timeout = useRef<number>(DEFAULT_TIMEOUT);

	useEffect(() => {
		let timer = setInterval(() => setShouldFetchData(true), timeout.current);

		return () => {
			clearTimeout(timer);
		}
	}, [])

	// Fetch song data
	// Todo migrate to React Query (idk if it works in preact tho)
	useEffect(() => {
		// Early return if no data is required
		if (shouldFetchData === false) {
			return;
		}

		// Look for the ressource in localhost on port 1608
		// Todo make it configurable
		const res = fetch('http://localhost:1608/');
		res
			.then(async (response: Response) => {
				const json = await response.json() as SongData;
				// If object given is valid and not the same as before, replace the ref content
				if (JSON.stringify(json) !== JSON.stringify(data.current)) {
					data.current = json;
				}
				// As the request was successful, we can be pretty sure API is responding :okayge:
				timeout.current = DEFAULT_TIMEOUT;
			})
			// If for some reason the request fails, double the timeout every request in order to
			// Avoid spamming requests in the void
			.catch((error) => {
				console.error(error);
				timeout.current = timeout.current * 2;
				console.log(timeout.current);
			});

		// Set it back to false
		setShouldFetchData(false);
	}, [shouldFetchData])

	return (
		// Todo find a way to make the card disapear if no song is played
		// AFAIK Tuna route will always return the last played last.fm song played, so for now
		// It will stay up whatever happens
		<SongCard {...data.current} />
	);
}

render(<App />, document.getElementById('app'));
