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

/**
 * Whether the sticky note detail is open.
 * @type {import('svelte/store').Writable<boolean>}
 */
export const openSticky = writable(false);

/**
 * The currently selected sticky note.
 * @type {import('svelte/store').Writable<{color?: string, title?: string, rotate?: number, tasks?: Array<{text: string, done: boolean}>} | null>}
 */
export const selectedSticky = writable(null);
