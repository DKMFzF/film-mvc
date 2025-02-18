import { Screen } from '@/components/base/Screen';
import { IClickableEvent } from '@/types/components/base/View';
import { cloneTemplate, ensureElement } from '@/utils/html';
import { SETTINGS } from '@/utils/constants';

import {
	FilmItem,
	MainData,
	MainSettings,
} from '@/types/components/view/screen/Main';
import { ListView } from '../common/List';
import { CardView } from '../partial/Card';
import { HeroView } from '../common/Hero';
import { FilmView } from '../partial/Film';
import { PageView } from '../partial/Page';
import { CardData } from '@/types/components/view/partial/Card';

/**
 * Экран главной страницы
 */
export class MainScreen extends Screen<MainData, MainSettings> {
	protected declare gallery: ListView<CardData>;
	protected declare hero: HeroView<FilmItem>;
	public declare page: PageView;

	protected init() {
		this.page = new PageView(ensureElement(SETTINGS.pageSelector), {
			...SETTINGS.pageSettings,
			onClick: this.settings.onOpenBasket,
		});

		this.gallery = new ListView<CardData>(ensureElement(SETTINGS.gallerySelector), {
				...SETTINGS.gallerySettings,
				item: new CardView(cloneTemplate(SETTINGS.cardTemplate), {
					...SETTINGS.cardSettings,
					onClick: this.onSelectFilmHandler.bind(this),
				}),
			}
		);


		this.hero = new HeroView<FilmItem>(ensureElement(SETTINGS.heroSelector), {
			...SETTINGS.heroSettings,
			contentView: new FilmView(cloneTemplate(SETTINGS.filmTemplate), {
				...SETTINGS.filmSettings,
				isCompact: false,
			}),
			onClick: this.onOpenFilmHandler.bind(this),
		});

		this.element = this.page.element;
	}

	protected onSelectFilmHandler({ item }: IClickableEvent<string>) {
		this.settings.onSelectFilm(item);
	}

	protected onOpenFilmHandler({ item }: IClickableEvent<FilmItem>) {
		this.settings.onOpenFilm(item.id);
	}

	set counter(value: number) {
		this.page.counter = value;
	}

	set items(value: CardData[]) {
		// console.log(value);
		this.gallery.items = value;
	}

	set selected(value: FilmItem) {
		this.hero.content = value;
		this.hero.cover = value.cover;
		this.gallery.setActiveItem(value.id);
	}
}
