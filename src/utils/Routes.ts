const { readdirSync } = require('fs')

export function getDirectories(source: string): string[] {
	return readdirSync(source, { withFileTypes: true })
		.filter(path => path.isDirectory())
		.map(path => {
			return source + '/' + path.name
		})
}

const getLastFolder = (path: string) => {
	return path.substring(path.lastIndexOf('/') + 1);
}

export function getRoutesFromPath(path: string) {
	const routesFolder = path;
	const modulesDirectories = getDirectories(routesFolder);
	return modulesDirectories.map(moduleDir => {
		const routePath = moduleDir;
		const module = require(routePath).default;
		return {
			routeName: '/' + getLastFolder(moduleDir.toLowerCase()),
			routes: module
		};
	});
}


export function setRouteByType(router, route, routePath) {
	switch (route.type) {
		case 'post': {
			if (route.middleware) {
				router.post(routePath + route.name, route.middleware, route.handle);
			}
			else {
				router.post(routePath + route.name, route.handle);
			}
			break;
		}
		case 'get': {
			if (route.middleware) {
				router.get(routePath + route.name, route.middleware, route.handle);
			}
			else {
				router.get(routePath + route.name, route.handle);
			}
			break;
		}
		case 'put': {
			if (route.middleware) {
				router.put(routePath + route.name, route.middleware, route.handle);
			}
			else {
				router.put(routePath + route.name, route.handle);
			}
			break;
		}
		case 'patch': {
			if (route.middleware) {
				router.patch(routePath + route.name, route.middleware, route.handle);
			}
			else {
				router.patch(routePath + route.name, route.handle);
			}
			break;
		}
		case 'delete': {
			if (route.middleware) {
				router.delete(routePath + route.name, route.middleware, route.handle);
			}
			else {
				router.delete(routePath + route.name, route.handle);
			}
			break;
		}
	}
}


export default getRoutesFromPath;