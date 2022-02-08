import { Request, Response, NextFunction } from 'express';

import {ServiceModel} from '../../schemas';
import {IService} from '../../interfaces';

class ServiceMiddleware {
    async checkDuplicateNames(req:Request, res:Response, next:NextFunction){
        try{
            const { title } = req.body as Partial<IService>;

            const serviceTitle = await ServiceModel.findOne({
                title: title?.toLowerCase()
            });

            if(serviceTitle) {
                next(new Error('This service name already exists'))
                return;
            }

            next();
        } catch(e) {
            next(e);
        }
    }

}

export const serviceMiddleware = new ServiceMiddleware;