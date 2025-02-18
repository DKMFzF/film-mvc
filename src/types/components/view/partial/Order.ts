import { IChangeable } from '../../base/View';

export interface OrderData {
	email: string;
	phone: string;
}

export interface OrderSettings extends IChangeable<OrderData> {
	email: string;
	phone: string;
}
