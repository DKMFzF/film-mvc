import { IClickable } from '../../base/View';

export interface PageData {
	counter: number;
	isLocked: boolean;
}

export interface PageSettings extends IClickable<never> {
	wrapper: string;
	counter: string;
	basket: string;
	lockedClass: string;
}
