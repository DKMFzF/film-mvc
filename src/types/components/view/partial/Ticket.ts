import { IClickable } from '../../base/View';

export interface TicketData {
	id: string;
	place: string;
	session: string;
	price: string;
}

export interface TicketSettings extends IClickable<TicketData> {
	place: string;
	session: string;
	price: string;
	delete: string;
}
