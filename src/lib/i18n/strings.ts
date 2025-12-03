import { writable, derived } from 'svelte/store';
import eng from './eng.json';
import ukr from './ukr.json';

const Strings: Record<string, Record<string, string>> = {
  eng: eng,
  ukr: ukr
};

export const lang = writable('eng');
export const strings = derived(lang, ($lang) => Strings[$lang]);
