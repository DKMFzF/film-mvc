import { EventHandler, EventsMap } from '@/types/components/base/EventEmitter';

export class EventEmitter {
	protected events: EventsMap;

	constructor() {
		this.events = new Map();
	}

	// подписка
	on(eventName: string, handler: EventHandler) {
		if (!this.events.has(eventName)) {
			this.events.set(eventName, new Set());
		}
		this.events.get(eventName).add(handler);
	}

	// отписка
	off(eventName: string, handler: EventHandler) {
		if (this.events.has(eventName)) {
			this.events.get(eventName).delete(handler);
		}
	}

	emit(eventName: string, data: object) {
		console.log('EventEmitter -> emit: OK');
		if (this.events.has(eventName)) {
			console.log('EventEmitter -> emit(if this.events.has(eventName)): OK');
			this.events.get(eventName).forEach((handler) => { // проходит по всем обработчикам
				console.log(handler);
				return handler(data); // срабатывает обработчик
			});
		}
	}

	reset() {
		this.events.clear();
	}

	bindEmitter(events: EventsMap) {
		this.events = events;
	}
}
