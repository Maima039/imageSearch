import {getRepository} from "typeorm";
import {NextFunction, Response, Request} from "express";
import {Image} from "../entity/Image"
import {validate} from "class-validator";
import {Err, HttpCode} from "../helper";

export class ImageController{
    public static get repo() {
        return getRepository(Image)
    }

    static async create(request: Request, response: Response, next: NextFunction) {
        let {index, des, url} = request.body
        let image = new Image()
        try{
            image.index = parseInt(index)
            image.des = des
            image.url = url
        } catch {
            return response.status(500).send()
        }
        try {
            const errors = await validate(image)
            if (errors.length > 0) {
                let err = new Err(HttpCode.E400)
                // console.log(errors)
                return response.status(400).send(err)
            }
            //save data to db
            await ImageController.repo.save(image)
        } catch (e) {
            console.log('error', e)
            return response.status(400).send(new Err(HttpCode.E400,  e))
        }
        return response.status(200).send(new Err(HttpCode.E200))
    }
    static async one(request: Request, response:Response,next:NextFunction){
        let {id} = request.params
        let imageId = parseInt(id)
        let image = null
        try{
            image = await ImageController.repo.findOneOrFail({id:imageId})
        } catch(e){
            return response.status(400).send(new Err(HttpCode.E400,  e))
        }
        return response.status(200).send(new Err(HttpCode.E200,image))
    }
    static async all(request: Request, response:Response,next:NextFunction){
        let image = null
        try{
            image = await ImageController.repo.find({})
        } catch(e){
            return response.status(400).send(new Err(HttpCode.E400,  e))
        }
        return response.status(200).send(new Err(HttpCode.E200,image))
    }

    static async clear(request: Request, response:Response,next:NextFunction){
        try{
            await ImageController.repo.clear()
        }catch (e) {
            console.log('error', e)
            return response.status(400).send(new Err(HttpCode.E400,  e))
        }
        return response.status(200).send(new Err(HttpCode.E200,'Clear!'))
    }

}
