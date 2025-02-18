import { View } from '../../base/View';
import { IClickableEvent } from '@/types/components/base/View';
import { ElementCreator } from '@/types/html';
import { createElement } from '@/utils/html';

import {
	ButtonData,
	ButtonSettings,
} from '@/types/components/view/common/Button';

/**
 * Отображение типовой кнопки
 */
export class ButtonView<T> extends View<ButtonData, ButtonSettings<T>> {
	init() {
		this.element.addEventListener('click', this.onClickHandler.bind(this));
	}

	onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event });
	}

	set label(value: string) {
		this.setValue(this.element, value);
	}

	/**
	 * Фабричный метод для создания кнопки, но возвращаем сразу элемент,
	 * так как кнопки особо не меняются и взаимодействие с классом не требуется
	 * @param label — текст кнопки
	 * @param settings — настройки кнопки для создания элемента
	 * @param onClick — обработчик клика
	 */
	static make<T extends HTMLElement>(
		label: string,
		settings: ElementCreator,
		onClick: (args: IClickableEvent<never>) => void
	): T {
		const el = new ButtonView(createElement(...settings), { onClick });
		return el.render({ label }) as T;
	}
}
