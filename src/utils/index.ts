import { ElementChild } from '@/types/html';

// По факту проверяет что x - строка, но не гарантирует что это селектор.
// Но главное, что мы вынесли эту проверку в отдельную функцию
// и можем её переиспользовать и когда нужно усовершенствовать.

// yes
export function isSelector<T>(x: string | T): x is string {
	return typeof x === 'string' && x.length > 1;
}

// yes
export function isPlainObject(obj: unknown): obj is object {
	const prototype = Object.getPrototypeOf(obj);
	return prototype === Object.getPrototypeOf({}) || prototype === null;
}

// yes
export function isBoolean(v: unknown): v is boolean {
	return typeof v === 'boolean';
}

// Для использования элемента или массива элементов в element.replaceChildren

// no
export function isChildElement(x: unknown): x is ElementChild {
	return x instanceof HTMLElement || Array.isArray(x);
}
