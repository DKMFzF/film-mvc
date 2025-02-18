import { OrderData } from '../partial/Order';
import { HeaderData } from '../common/Header';

export interface OrderFormData {
	contacts: OrderData;
	header: HeaderData;
	isActive: boolean;
	isDisabled: boolean;
	message: string;
	total: string;
	isError: boolean;
}

export interface OrderFormSettings {
	onChange: (data: OrderData) => void;
	onClose: () => void;
	onNext: () => void;
	onBack: () => void;
}
