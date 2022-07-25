import { browser } from "$app/env";

export function match() {
    // to see if the function was executed client-side
    browser && console.log('The matcher was executed client-side.');

    return true;
}