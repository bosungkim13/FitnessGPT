import { writable } from 'svelte/store';

export const aiResponse = writable('');

export const test_response = writable(
	'Weaknesses:\n'
);
