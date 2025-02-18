export type SelectorElement<T> = T | string;
export type SelectorCollection<T> = string | NodeListOf<Element> | T[];

export type ElementChild = HTMLElement | HTMLElement[];
// следующие типы для универсальной настройки тега
export type ElementAttrs =
	| 'textContent'
	| 'className'
	| 'href'
	| 'src'
	| 'alt'
	| 'dataset'; // ограничиваем, что можно настроить
export type ElementProps<T extends HTMLElement> = Partial<
	Record<keyof T, string | boolean | object>
>; // Partial делает все поля не обязательными
export type ElementValue<T extends HTMLElement> =
	| string
	| ElementChild
	| ElementProps<T>; // получаем такие варианты значения
export type ElementCreator<T extends HTMLElement = HTMLElement> = [
	keyof HTMLElementTagNameMap,
	ElementProps<T>
];
