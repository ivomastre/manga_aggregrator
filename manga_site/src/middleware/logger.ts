import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next) => {

    console.log('Request logged:', req.method, req.path)
    console.log('Request Body:', req.body)
    console.log('')
    next()
}

export default loggerMiddleware