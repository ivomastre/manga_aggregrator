import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import mangaIdController from './controllers/mangaId/mangaId.controller'
import MangaController from './controllers/mangaSite/mangaSite.controller'
const app = new App({
    port: 5000,
    controllers: [
        new mangaIdController(),
        new MangaController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()