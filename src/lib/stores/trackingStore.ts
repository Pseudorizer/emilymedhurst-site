import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const itemKey = 'tracking-enabled';
const defaultValue = 'true';
const initialValue = browser ? window.localStorage.getItem(itemKey) ?? defaultValue : defaultValue;

const trackingEnabled = writable(initialValue === 'true');

trackingEnabled.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem(itemKey, value.toString());
	}
});

export default trackingEnabled;
