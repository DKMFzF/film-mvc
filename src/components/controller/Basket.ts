import { Controller } from '@/components/base/Controller';
import { AppState, AppStateModals } from '@/types/components/model/AppState';

export class BasketController extends Controller<AppState> {
	onRemove = (id: string) => {
		this.model.removeTicket(id);
	};
	onNext = () => {
		this.model.openModal(AppStateModals.contacts);
	};
	onBack = () => {
		this.model.openModal(AppStateModals.place);
	};
	onClose = () => {
		this.model.openModal(AppStateModals.none);
	};
}
