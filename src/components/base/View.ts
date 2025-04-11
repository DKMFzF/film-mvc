import {
	ElementChild,
	ElementProps,
	ElementValue,
	SelectorElement,
} from '@/types/html';
import {
	createElement,
	ensureElement,
	setElementChildren,
	setElementProps,
} from '@/utils/html';
import { isChildElement, isPlainObject, isSelector } from '@/utils';
import { IView } from '@/types/components/base/View';

// Базовое отображение
export abstract class View<T, S extends object> implements IView<T, S> {
	// чтобы при копировании создавать дочерний класс, не зная его имени
	['constructor']!: new (root: HTMLElement, settings: S) => this;
	// введем кеш чтобы не пересоздавать и не искать повторно элементы
	protected cache: Record<string, HTMLElement> = {};

	// конструктор с элементом и настройками,
	// в простейшем виде без проверок и дефолтных значений
	constructor(public element: HTMLElement, protected readonly settings: S) {
		// чтобы не переопределять конструктор, для компактности и соблюдения интерфейса
		// можно реализовать так называемые методы жизненного цикла класса,
		// которые вызываются в нужный момент и могут быть легко переопределены.
		this.init();
		if (!this.element) {
			throw new Error('Element is not defined');
		}
	}

	// копирующий конструктор, чтобы настроить один раз
	// и дальше использовать копии отображения везде,
	// но при желании можем что-то поменять, например обработчики событий
	copy(settings?: S) {
		return new this.constructor(
			this.element.cloneNode(true) as HTMLElement,
			Object.assign({}, this.settings, settings ?? {})
		);
	}

	// методы жизненного цикла
	// начальная инициализация, здесь можно создать элементы, повесить слушатели и т.д.
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	protected init() {}

	// рендер, вызывается когда надо обновить отображение с данными
	render(data: Partial<T>): HTMLElement {
		// Простая реализация рендера позволяющая, в том числе
		// установить сеттеры для отдельных полей
		// и вызывать их через поверхностное копирование.
		if (typeof data === 'object') {
			// это не безопасная конструкция в JS,
			// но при правильной типизации в TS можем себе позволить
			// главное это прописать тип данных для рендера в дочерних классах
			Object.assign(this, data);
		}
		return this.element;
	}

	// ... другие методы которые помогут строить отображение

	// Обернем метод проверки элемента из утилит в кеш, чтобы повторно не искать по DOM
	protected ensure<T extends HTMLElement>(
		query?: SelectorElement<T>,
		root: HTMLElement = this.element
	): T {
		if (!isSelector(query)) {
			return ensureElement(query);
		} else {
			if (!this.cache[query]) {
				this.cache[query] = ensureElement(query, root);
			}
			return this.cache[query] as T;
		}
	}

	// замена элемента на другой или его обновлённую версию
	// с проверкой существования обоих
	protected setElement<T extends HTMLElement>(
		query: SelectorElement<T>,
		value: HTMLElement
	) {
		const el = this.ensure(query);
		el.replaceWith(value);
	}

	protected ensureTemplate(query: string) {
		const el = this.ensure(query);
		el.remove();
		return el.cloneNode(true) as HTMLElement;
	}

	protected create<T extends HTMLElement>(
		settings:
			| [keyof HTMLElementTagNameMap, ElementProps<T>]
			| keyof HTMLElementTagNameMap,
		props?: ElementProps<T>,
		children?: ElementChild
	): T {
		if (typeof settings === 'string')
			return createElement<T>(settings, props, children);
		else if (Array.isArray(settings)) {
			return createElement<T>(
				settings[0],
				{
					...settings[1],
					...(props ?? {}),
				},
				children
			);
		} else throw new Error('Unknown create settings');
	}

	setVisibility<T extends HTMLElement>(
		query: SelectorElement<T>,
		isVisible: boolean
	) {
		const el = this.ensure(query);
		if (isVisible) el.style.removeProperty('display');
		else el.style.setProperty('display', 'none');
	}

	// метод для универсальной установки свойств тега
	protected setValue<T extends HTMLElement>(
		query: SelectorElement<T>,
		value: ElementValue<T>
	) {
		const el = query instanceof HTMLElement ? query : this.ensure(query);
		if (typeof value === 'string') el.textContent = value;
		else if (isChildElement(value)) setElementChildren(el, value);
		else if (isPlainObject(value)) {
			setElementProps<T>(el, value as ElementProps<T>);
		} else {
			throw new Error('Unknown value type');
		}
	}
}
