// Расширяем глобальный интерфейс NodeJS.ProcessEnv,
// чтобы видеть в подсказках IDE переменные окружения в проекте
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_ORIGIN: string;
			NODE_ENV: 'development' | 'production' | 'testing';
		}
	}
}

export {};
