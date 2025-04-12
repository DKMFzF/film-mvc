// Я видел что так делают pro-разрабы
// Тут расширяется глобальный интерфейс NodeJS.ProcessEnv
// Что бы видеть в подсказках IDE переменные окружения в проекте
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_ORIGIN: string;
			NODE_ENV: 'development' | 'production' | 'testing';
		}
	}
}

export {};
