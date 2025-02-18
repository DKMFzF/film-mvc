import { ModalScreen } from '@/components/view/screen/ModalScreen';
import { IClickableEvent } from '@/types/components/base/View';
import { cloneTemplate } from '@/utils/html';
import { SETTINGS } from '@/utils/constants';

import {
	BasketData,
	BasketSettings,
} from '@/types/components/view/screen/Basket';
import { HeaderData } from '@/types/components/view/common/Header';
import { ListView } from '@/components/view/common/List';
import { TicketData } from '@/types/components/view/partial/Ticket';
import { HeaderView } from '@/components/view/common/Header';
import { TicketView } from '@/components/view/partial/Ticket';
import { ListData } from '@/types/components/view/common/List';

/**
 * Экран корзины
 */
export class BasketScreen extends ModalScreen<
	HeaderData,
	ListData<TicketData>,
	BasketData,
	BasketSettings
> {
	initHeader() {
		return new HeaderView(cloneTemplate(SETTINGS.headerTemplate), {
			...SETTINGS.headerSettings,
			onClick: this.settings.onBack,
		});
	}

	initContent() {
		console.log(`BasketScreen -> initContent()`);
		return new ListView<TicketData>(cloneTemplate(SETTINGS.basketTemplate), {
			...SETTINGS.basketSettings,
			item: new TicketView(cloneTemplate(SETTINGS.ticketTemplate), {
				...SETTINGS.ticketSettings,
				onClick: this.onRemoveTicket.bind(this),
			}),
		});
	}

	protected onRemoveTicket({ item }: IClickableEvent<TicketData>) {
		this.settings.onRemove(item.id);
	}

	set tickets(tickets: TicketData[]) {
		console.log(`BasketScreen -> set tickets(${tickets})`); // срабатывает когда включается render
		this.modal.content = { items: tickets, };
		this.nextButton.disabled = !tickets.length;
	}

	set total(total: string) {
		this.modal.message = `${SETTINGS.basketModal.totalLabel} ${total}`;
	}
}
