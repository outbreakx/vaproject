declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			SERVER_URL: string;
			SERVER_PORT: number;
			MONGO_URL: string;
			MONGO_COLLECTION: string;
		}
	}
}

export { };