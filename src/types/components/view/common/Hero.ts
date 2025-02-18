import { IClickable } from '../../base/View';
import { IView } from '../../base/View';

export interface HeroData<T> {
	cover: string;
	content: T;
}

export interface HeroSettings<T> extends IClickable<T> {
	action: string;
	background: string;
	content: string;
	contentView: IView<T>;
}
