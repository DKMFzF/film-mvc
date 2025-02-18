import { ModalScreen } from '@/components/view/screen/ModalScreen';
import { cloneTemplate, createElement } from '@/utils/html';
import { SETTINGS } from '@/utils/constants';

import {
	ScheduleData,
	ScheduleSession,
} from '@/types/components/view/partial/Schedule';
import { FilmData } from '@/types/components/view/partial/Film';
import { FilmView } from '@/components/view/partial/Film';
import { ScheduleView } from '@/components/view/partial/Schedule';
import {
	SelectSessionData,
	SelectSessionSettings,
} from '@/types/components/view/screen/SelectSession';
import { ISelectableEvent, IView } from '@/types/components/base/View';

/**
 * Экран выбора сеанса
 */
export class SelectSessionScreen extends ModalScreen<FilmData, Partial<ScheduleData>, SelectSessionData, SelectSessionSettings> {
	initHeader(): IView<FilmData> {
		return new FilmView(cloneTemplate(SETTINGS.filmTemplate), {
			...SETTINGS.filmSettings,
			isCompact: true,
		});
	}

	initContent(): IView<Partial<ScheduleData>> {
		return new ScheduleView(createElement(...SETTINGS.scheduleElement), {
			...SETTINGS.scheduleSettings,
			onSelect: this.onSelect.bind(this),
		});
	}

	protected onSelect({ value }: ISelectableEvent<ScheduleSession>) {
		this.settings.onSelect(value.id);
	}

	set film(data: FilmData) {
		this.modal.header = data;
	}

	set schedule(data: Partial<ScheduleData>) {
		this.modal.content = data;
	}
}
