import { AppState, AppStateModals } from '@/types/components/model/AppState';
import { Controller } from '@/components/base/Controller';

export class ModalController extends Controller<AppState> {
	onClose = () => {
		this.model.openModal(AppStateModals.none);
	};
}
