import {
    rootRoutes,
    notFoundRoutes,
    genericErrorFunction
} from './generalRoutes'

import { wordRoutes } from './wordRoutes'
import { essayRoutes } from './essayRoutes'

export const setRoute = (route, expressInstance, genericErrorFn = genericErrorFunction) => {
    expressInstance[route.method](route.url, route.fn, route.errorFn || genericErrorFn)
    return expressInstance
}

export const setAllRoutes = (
    expressInstance, 
    routes = [
        ...rootRoutes,
        ...wordRoutes,
        ...essayRoutes,
        ...notFoundRoutes
    ]
) => {
    routes.forEach(route => setRoute(route, expressInstance))
    return expressInstance
}
