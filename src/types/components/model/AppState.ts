import {
	Contacts,
	IFilmAPI,
	Movie,
	Order,
	OrderResult,
	Session,
	Ticket,
} from './FilmApi';

// Такие данные нам нужны, чтобы сформировать временный уникальный ключ билета
export type TicketData = {
	film: string;
	session: string;
	row: number;
	seat: number;
};

// Полное описание билета, которое мы будем хранить в корзине и в localStorage
// Для удобства добавим в него название фильма, день и время сеанса
// это позволит корректно отображать корзину даже без загрузки фильмов и сеансов
export type BasketTicket = TicketData & {
	id: string;
	title: string;
	daytime: string;
	day: string;
	time: string;
	price: number;
};

// Форматированные данные билета для отображения в корзине
export type TicketDescription = {
	id: string;
	place: string;
	session: string;
	price: string;
};

// Краткое описание фильма для отображения в модальных окнах
export type MovieDescription = {
	title: string;
	day: string;
	time: string;
};

// Место в зале
export type HallPlace = {
	row: number;
	seat: number;
};

// Какие модальные окна у нас есть
export enum AppStateModals {
	session = 'modal:session',
	place = 'modal:place',
	basket = 'modal:basket',
	contacts = 'modal:contacts',
	success = 'modal:success',
	none = 'modal:none',
}

// Какие изменения состояния приложения могут происходить
export enum AppStateChanges {
	movies = 'change:movie',
	modal = 'change:modal',
	modalMessage = 'change:modalMessage',
	selectedMovie = 'change:selectedMovie',
	sessions = 'change:sessions',
	selectedSession = 'change:selectedSession',
	basket = 'change:basket',
	order = 'change:order',
}

// Состояние приложения, которое мы будем хранить в localStorage
export type PersistedState = {
	tickets: BasketTicket[];
	contacts: Contacts;
};

// Модель данных приложения
export interface AppState {
	// Загружаемые с сервера данные
	movies: Map<string, Movie>;
	movieSessions: Map<string, Session>;

	// Заполняемые пользователем данные
	selectedMovie: Movie | null;
	selectedSession: Session | null;
	basket: Map<string, BasketTicket>;
	basketTotal: number;
	contacts: Contacts;
	tickets: Ticket[];
	order: Order;

	// Состояние интерфейса
	openedModal: AppStateModals;
	isOrderReady: boolean;
	modalMessage: string | null;
	isError: boolean;

	// Действия с API
	loadMovies(): Promise<void>;
	loadSchedule(id: string): Promise<void>;
	orderTickets(): Promise<OrderResult[]>;

	// Действия с localStorage
	restoreState(): void;
	persistState(): void;

	// Пользовательские действия
	selectMovie(id: string): void;
	selectSession(id: string): void;
	selectPlaces(selected: HallPlace[]): void;
	removeTicket(id: string): void;
	fillContacts(contacts: Partial<Contacts>): void;
	isValidContacts(): boolean;

	// Вспомогательные методы
	getBasketMovie(): MovieDescription | null;
	formatMovieDescription(movie: MovieDescription): string;
	formatTicketDescription(ticket: BasketTicket): TicketDescription;
	formatCurrency(value: number): string;

	// Методы для работы с модальными окнами
	openModal(modal: AppStateModals): void;
	setMessage(message: string | null, isError: boolean): void;
}

// Настройки модели данных
export interface AppStateSettings {
	formatCurrency: (value: number) => string;
	storageKey: string;
	// Функция, которая будет вызываться при изменении состояния
	onChange: (changed: AppStateChanges) => void;
}

// Конструктор модели данных
export interface AppStateConstructor {
	new (api: IFilmAPI, settings: AppStateSettings): AppState;
}
