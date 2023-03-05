import {Router} from "express";
import image from "./image";


const routes = Router()
routes.use('/image',image)

export default routes