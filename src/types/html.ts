export type SelectorElement<T> = T | string;
export type SelectorCollection<T> = string | NodeListOf<Element> | T[];

export type ElementChild = HTMLElement | HTMLElement[];
export type ElementAttrs =
	| 'textContent'
	| 'className'
	| 'href'
	| 'src'
	| 'alt'
	| 'dataset';
export type ElementProps<T extends HTMLElement> = Partial<
	Record<keyof T, string | boolean | object>
>;
export type ElementValue<T extends HTMLElement> =
	| string
	| ElementChild
	| ElementProps<T>;
export type ElementCreator<T extends HTMLElement = HTMLElement> = [
	keyof HTMLElementTagNameMap,
	ElementProps<T>
];
