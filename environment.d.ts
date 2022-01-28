declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test';
			SERVER_URL: string;
			SERVER_PORT: string;
			DB_HOST: string;
			DB_PORT: string;
			DB_USER: string;
			DB_PASS: string;
			DB_NAME: string;
		}
	}
}

export { };