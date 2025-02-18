import { Screen } from '@/components/base/Screen';
import { cloneTemplate } from '@/utils/html';
import { SETTINGS } from '@/utils/constants';

import {
	SuccessData,
	SuccessSettings,
} from '@/types/components/view/screen/Success';
import { ModalView } from '@/components/view/common/Modal';
import { HeaderView } from '@/components/view/common/Header';
import { HeaderData } from '@/types/components/view/common/Header';

/**
 * Экран подтверждения успешного бронирования
 */
export class SuccessScreen extends Screen<SuccessData, SuccessSettings> {
	protected declare modal: ModalView<never, HeaderData>;

	init() {
		this.modal = new ModalView<never, HeaderData>(
			cloneTemplate(SETTINGS.modalTemplate),
			{
				...SETTINGS.modalSettings,
				headerView: null,
				contentView: new HeaderView(cloneTemplate(SETTINGS.messageTemplate), {
					...SETTINGS.messageSettings,
					onClick: this.settings.onClose,
				}),
				onClose: this.settings.onClose,
				actions: [],
			}
		);

		this.element = this.modal.element;
	}

	set content(value: HeaderData) {
		this.modal.content = value;
	}

	set isActive(value: boolean) {
		this.modal.isActive = value;
	}
}
