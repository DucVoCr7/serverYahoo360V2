import express from "express";
import refreshTokenControllers from '../controllers/refreshTokenControllers'

const router = express.Router()

const initRefreshTokenRoutes = (app)=> {
    router.post('/refreshToken', refreshTokenControllers.refreshToken)
    return app.use ('/', router)
}

export default initRefreshTokenRoutes;