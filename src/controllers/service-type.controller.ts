import { NextFunction, Request, Response } from 'express';

import { serviceTypeService } from '../services';

class ServiceTypeController {
    async createServiceType(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { params, body } = req;

            const createdServiceType = await serviceTypeService.createServiceType(body, params.service_id);

            res.json(createdServiceType);
        } catch (e) {
            next(e);
        }
    }
}

export const serviceTypeController = new ServiceTypeController();