import { error } from '@sveltejs/kit';
import letters from '$lib/letters.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const slug = params.slug;

  // check if slug exists
  if (!letters[slug]) {
    throw error(404, 'Carta no encontrada');
  }

  const { title, emoji, date, data } = letters[slug];

  const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
  const content = new TextDecoder().decode(bytes);

  return {
    title,
    content,
    emoji,
    date
  };
}
