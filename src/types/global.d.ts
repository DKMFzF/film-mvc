// Стандартный подход для добавления кастомных переменных в NodeJS

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
