
import {Router} from "express";
import {ImageController} from "../controller/ImageController";


const router = Router()

router.post('/', ImageController.create)
router.get('/:id', ImageController.one)
router.get('/', ImageController.all)
router.delete('/', ImageController.clear)
export default router
