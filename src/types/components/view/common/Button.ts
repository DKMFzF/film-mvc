import { IClickable } from '../../base/View';

export interface ButtonData {
	label: string;
}

export interface ButtonSettings<T> extends IClickable<T> {}
