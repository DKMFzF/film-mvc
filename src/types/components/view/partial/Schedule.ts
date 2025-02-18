import { ElementCreator } from '@/types/html';
import { ISelectable } from '../../base/View';

export type ScheduleSession = {
	id: string;
	day: string;
	time: string;
};

export type DaySchedule = {
	[key: string]: ScheduleSession;
};

export type HallSessions = {
	[key: string]: DaySchedule;
};

export interface ScheduleData {
	sessions: ScheduleSession[];
	selected: ScheduleSession | null;
}

export interface ScheduleSettings extends ISelectable<ScheduleSession> {
	time: ElementCreator;
	label: ElementCreator;
	day: ElementCreator;
	activeClass: string;
}
