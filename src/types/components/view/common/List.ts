import { IView } from '../../base/View';

export type ElementsMap = Record<string, HTMLElement>;

export interface ItemData {
	id: string;
}

export interface ListData<T> {
	items: T[];
}

export interface ListSettings<T> {
	item: IView<T, unknown>;
	activeItemClass: string;
	itemClass: string;
}
