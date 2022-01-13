import { Router } from "express";
import path from "path";

import { setRouteByType, getDirectories, getRoutesFromPath } from "@utils/Routes";

const folder = path.resolve(__dirname);

const folders = getDirectories(folder);

const router = Router();

for (const folder of folders) {
	const lastItem = folder.substring(folder.lastIndexOf('/') + 1);
	const APIROUTES = getRoutesFromPath(folder);

	const currentRouter = Router();

	for (const routeData of APIROUTES) {
		const routePath = routeData.routeName;
		for (const route of routeData.routes) {
			setRouteByType(currentRouter, route, routePath);
		}
	}
	router.use(`/${lastItem}`, currentRouter);

}

export default router;