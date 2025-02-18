import { AppState, AppStateModals } from '@/types/components/model/AppState';
import { Controller } from '@/components/base/Controller';
import { SelectedPlace } from '@/types/components/view/partial/Places';

export class PlacesController extends Controller<AppState> {
	onSelect = (places: SelectedPlace[]) => {
		this.model.selectPlaces(places);
		this.model.persistState();
	};
	onNext = () => {
		this.model.openModal(AppStateModals.basket);
	};
	onBack = () => {
		this.model.openModal(AppStateModals.session);
	};
	onClose = () => {
		this.model.openModal(AppStateModals.none);
	};
}
