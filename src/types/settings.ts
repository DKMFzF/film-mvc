import { ElementCreator } from '@/types/html';

// для лучшей типизации я использовал огроооомный 
// интерфейс для стандартизации настроек
export interface Settings {
	// views settings
	gallerySelector: string;
	gallerySettings: {
		activeItemClass: string;
		itemClass: string;
	};
	cardSettings: {
		text: string;
		image: string;
	};
	cardTemplate: string;

	filmTemplate: string;
	filmSettings: {
		rating: string;
		director: string;
		tags: string;
		title: string;
		description: string;
		compactClass: string;
		tagsSeparator: string;
	};
	
	heroSelector: string;
	heroSettings: {
		action: string;
		background: string;
		content: string;
	};
	pageSelector: string;
	pageSettings: {
		wrapper: string;
		counter: string;
		basket: string;
		lockedClass: string;
	};
	scheduleElement: ElementCreator;
	scheduleSettings: {
		day: ElementCreator;
		label: ElementCreator;
		time: ElementCreator;
		activeClass: string;
	};
	placesElement: ElementCreator;
	placesSettings: {
		seat: ElementCreator;
		seatsContainer: ElementCreator;
		label: ElementCreator;
		rowContainer: ElementCreator;
		rowLabel: string;
		rowSeparator: string;
		takenSeparator: string;
		activeClass: string;
	};
	ticketTemplate: string;
	ticketSettings: {
		place: string;
		session: string;
		price: string;
		delete: string;
	};
	headerTemplate: string;
	headerSettings: {
		action: string;
		title: string;
		description: string;
	};

	basketTemplate: string;
	basketSettings: {
		activeItemClass: string;
		itemClass: string;
	};
	orderTemplate: string;
	orderSettings: {
		email: string;
		phone: string;
	};
	messageTemplate: string;
	messageSettings: {
		title: string;
		description: string;
		action: string;
	};

	// modals settings
	modalTemplate: string;
	modalSettings: {
		close: string;
		header: string;
		content: string;
		footer: string;
		message: string;
		activeClass: string;
		messageErrorClass: string;
	};
	scheduleModal: {
		nextLabel: string;
		nextSettings: ElementCreator;
	};
	placesModal: {
		headerTitle: string;
		nextLabel: string;
		nextSettings: ElementCreator;
	};
	basketModal: {
		headerTitle: string;
		nextLabel: string;
		nextSettings: ElementCreator;
		totalLabel: string;
	};
	orderModal: {
		headerTitle: string;
		nextLabel: string;
		totalLabel: string;
		nextSettings: ElementCreator;
	};
	successModal: {
		title: string;
		description: string;
		action: string;
	};

	// model settings
	appState: {
		formatCurrency: (value: number) => string;
		storageKey: string;
	};
}
