import { error } from '@sveltejs/kit';
import data from '$lib/letters.json';

/** @type {import('./$types').PageLoad} */
export function load() {
	const lettersList = Object.entries(data).map(([key, value]) => ({
		key,
		title: value.title
	}));

	return { letters: lettersList };
}
