import { View } from '../../base/View';
import { CardData, CardSettings } from '@/types/components/view/partial/Card';

/**
 * Маленькая карточка фильма для списка
 */
export class CardView extends View<CardData, CardSettings> {
	id: string;

	init() {
		this.element.addEventListener('click', this.onClickHandler.bind(this));
	}

	onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event, item: this.id });
	}

	set image(value: string) {
		this.setValue<HTMLImageElement>(this.settings.image, { src: value,});
	}

	set title(value: string) {
		this.setValue(this.settings.text, value);
		this.setValue<HTMLImageElement>(this.settings.image, {
			alt: value,
		});
	}
}
