import path from "path";
import { createConnection } from "typeorm";


export async function mysqlConnection() {
	try {
		return createConnection({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT || '3306'),
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			synchronize: true,
			logging: false,
			entities: [path.resolve(process.cwd(), 'src/entities/*{.ts,.js}')],
			ssl: true,
			extra: {
				ssl: {
					rejectUnauthorized: false
				}
			}
		}).then(async connection => {	
			console.log("Connected to postgres database");
		});
	}
	catch (e) {
		throw new Error(e);
	}
}