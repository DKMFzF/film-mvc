import { CardData } from '../partial/Card';
import { FilmData } from '../partial/Film';

export interface FilmItem extends FilmData {
	id: string;
	cover: string;
}

export interface MainData {
	counter: number;
	items: CardData[];
	selected: FilmItem;
}

export interface MainSettings {
	onOpenBasket: () => void;
	onSelectFilm: (id: string) => void;
	onOpenFilm: (id: string) => void;
}
