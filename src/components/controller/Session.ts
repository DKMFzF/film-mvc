import { Controller } from '@/components/base/Controller';
import { AppState, AppStateModals } from '@/types/components/model/AppState';

export class SessionController extends Controller<AppState> {
	onSelect = (id: string) => {
		this.model.selectSession(id);
	};
	onNext = () => {
		this.model.openModal(AppStateModals.place);
	};
	onClose = () => {
		this.model.openModal(AppStateModals.none);
	};
}
