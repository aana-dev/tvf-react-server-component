import { Suspense } from 'react';
import { getAll } from '../data/db.js';

export default function Page() {
	return (
		<>
			<h1>Phần implement from scratch đến đây là hết</h1>
			<Suspense fallback={<div>Loading albums...</div>}>
				<Albums />
			</Suspense>
		</>
	);
}

async function Albums() {
	const albums = await getAll();
	return (
		<ul>
			{albums.map((a) => (
				<li key={a.id} className="flex gap-2 items-center mb-2">
					<img className="w-20 aspect-square" src={a.cover} alt={a.title} />
					<div>
						<h3 className="text-xl">{a.title}</h3>
						<p>{a.songs.length} songs</p>
					</div>
				</li>
			))}
		</ul>
	);
}
