import { IClickable } from '../../base/View';

export interface HeaderData {
	title: string;
	description: string;
	action?: string;
}

export interface HeaderSettings extends IClickable<never> {
	action: string;
	title: string;
	description: string;
}
