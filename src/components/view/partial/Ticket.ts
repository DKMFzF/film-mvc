import { View } from '../../base/View';
import {
	TicketData,
	TicketSettings,
} from '@/types/components/view/partial/Ticket';

/**
 * Отображение билета в корзине
 */
export class TicketView extends View<TicketData, TicketSettings> {
	protected _item!: TicketData;

	init() {
		this.ensure(this.settings.delete).addEventListener(
			'click',
			this.onClickHandler.bind(this)
		);
	}

	onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event, item: this._item });
	}

	set place(value: string) {
		this.setValue(this.settings.place, value);
	}

	set session(value: string) {
		this.setValue(this.settings.session, value);
	}

	set price(value: string) {
		this.setValue(this.settings.price, value);
	}

	render(data: TicketData) {
		this._item = data;
		return super.render(data);
	}
}
