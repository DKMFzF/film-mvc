import { FilmData } from '@/types/components/view/partial/Film';
import { ScheduleData } from '@/types/components/view/partial/Schedule';

export interface SelectSessionData {
	film: FilmData;
	schedule: Partial<ScheduleData>;
	isActive: boolean;
	isDisabled: boolean;
}

export interface SelectSessionSettings {
	onSelect: (id: string) => void;
	onNext: () => void;
	onClose: () => void;
}
