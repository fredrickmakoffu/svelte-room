import { writable } from 'svelte/store';

/**
 * Whether the book detail modal is open.
 * @type {import('svelte/store').Writable<boolean>}
 */
export const openBook = writable(false);

/**
 * The currently selected book's data.
 * @type {import('svelte/store').Writable<{title?: string, tagline?: string, points?: string[]}>}
 */
export const selectedBook = writable({});
