import { HeaderData } from '../common/Header';
import { PlacesData, SelectedPlace } from '../partial/Places';

export interface SelectPlacesData {
	places: Partial<PlacesData>;
	header: HeaderData;
	isActive: boolean;
	isDisabled: boolean;
}

export interface SelectPlacesSettings {
	onSelect: (places: SelectedPlace[]) => void;
	onClose: () => void;
	onNext: () => void;
	onBack: () => void;
}
