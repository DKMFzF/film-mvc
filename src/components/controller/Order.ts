import { Controller } from '@/components/base/Controller';
import { AppState, AppStateModals } from '@/types/components/model/AppState';
import { OrderData } from '@/types/components/view/partial/Order';

export class OrderController extends Controller<AppState> {
	onChange = (value: OrderData) => {
		this.model.fillContacts(value);
	};
	onNext = async () => {
		const ticketAmount = this.model.basket.size;
		if (this.model.isValidContacts()) {
			const result = await this.model.orderTickets();
			if (result.length === ticketAmount) {
				this.model.persistState();
				this.model.openModal(AppStateModals.success);
			}
		}
	};
	onBack = () => {
		this.model.openModal(AppStateModals.basket);
	};
	onClose = () => {
		this.model.openModal(AppStateModals.none);
	};
}
