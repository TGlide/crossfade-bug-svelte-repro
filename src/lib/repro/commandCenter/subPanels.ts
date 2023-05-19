import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';

// Store

export type SubPanel = {
    name: string;
    component: typeof SvelteComponent;
};

export const subPanels = writable<Array<SubPanel>>([]);

//
export function addSubPanel(subPanel: SubPanel) {
    subPanels.update((curr) => {
        curr.push(subPanel);
        return curr;
    });
}

export function popSubPanel() {
    subPanels.update((curr) => {
        curr = curr.slice(0, -1);
        return curr;
    });
}

export function clearSubPanels() {
    subPanels.set([]);
}
