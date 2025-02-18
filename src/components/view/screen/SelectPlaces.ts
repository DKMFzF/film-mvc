import { ModalScreen } from '@/components/view/screen/ModalScreen';
import { cloneTemplate, createElement } from '@/utils/html';
import { SETTINGS } from '@/utils/constants';

import {
	SelectPlacesData,
	SelectPlacesSettings,
} from '@/types/components/view/screen/SelectPlaces';
import { HeaderData } from '@/types/components/view/common/Header';
import {
	PlacesData,
	SelectedPlace,
} from '@/types/components/view/partial/Places';
import { HeaderView } from '@/components/view/common/Header';
import { PlacesView } from '@/components/view/partial/Places';
import { ISelectableEvent } from '@/types/components/base/View';

/**
 * Экран выбора мест
 */
export class SelectPlacesScreen extends ModalScreen<
	HeaderData,
	Partial<PlacesData>,
	SelectPlacesData,
	SelectPlacesSettings
> {
	initHeader() {
		return new HeaderView(cloneTemplate(SETTINGS.headerTemplate), {
			...SETTINGS.headerSettings,
			onClick: this.settings.onBack,
		});
	}

	initContent() {
		return new PlacesView(createElement(...SETTINGS.placesElement), {
			...SETTINGS.placesSettings,
			onSelect: this.onSelect.bind(this),
		});
	}

	protected onSelect({ value }: ISelectableEvent<SelectedPlace[]>) {
		this.settings.onSelect(value);
	}

	set places(value: Partial<PlacesData>) {
		this.modal.content = value;
	}
}
