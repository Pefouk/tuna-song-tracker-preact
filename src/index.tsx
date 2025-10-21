import { render } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

import './style.css';

type TData = {
	album: string;
	artists: string[];
	cover_path: string;
	cover_url: string;
	lyrics: string;
	playback_date: string;
	playback_time: string;
	status: string;
	status_id: number;
	title: string;
}

export function App() {
	const [fetchData, setFetchData] = useState(true);
	const data = useRef<TData>(null);

	useEffect(() => {
		let timer = setInterval(() => setFetchData(true), 500);

		return () => {
			clearTimeout(timer);
		}
	}, null)

	useEffect(() => {
		if (fetchData === false) {
			return;
		}
		const res = fetch('http://localhost:1608/');
		res.then(async (response: Response) => {
			const json = await response.json();
			data.current = json;
		});
		setFetchData(false);
	}, [fetchData])


	return (
		data.current && (
			<RenderData {...data?.current} />
		)
	);
}

export function RenderData({ title, artists, cover_path }: TData) {
	useEffect(() => console.log('huh'), [title]);
	return (
		<div class="card">
			<div class="image">
				<img src={cover_path} alt="cover" />
			</div>
			<div class="titles">
				<span class="name">{title}</span>
				<span class="artist">{artists.map((name) => name)}</span>
			</div>
		</div>
	)
}

render(<App />, document.getElementById('app'));
