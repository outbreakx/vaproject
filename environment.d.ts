declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test';
			SERVER_URL: string;
			SERVER_PORT: string;
			MONGO_URL: string;
			MONGO_COLLECTION: string;
			TEST_SERVER_URL: string;
		}
	}
}

export { };