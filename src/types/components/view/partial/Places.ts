import { ElementCreator } from '@/types/html';
import { ISelectable } from '../../base/View';

export type SelectedPlace = {
	row: number;
	seat: number;
};

export type HallSize = {
	rows: number;
	seats: number;
};

export interface PlacesData {
	hall: HallSize;
	taken: string[];
	selected: SelectedPlace[];
}

export interface PlacesSettings extends ISelectable<SelectedPlace[]> {
	seat: ElementCreator;
	seatsContainer: ElementCreator;
	label: ElementCreator;
	rowContainer: ElementCreator;
	rowLabel: string;
	rowSeparator: string;
	takenSeparator: string;
	activeClass: string;
}
