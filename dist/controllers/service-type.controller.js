"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTypeController = void 0;
const services_1 = require("../services");
class ServiceTypeController {
    async createServiceType(req, res, next) {
        try {
            const { params, body } = req;
            const createdServiceType = await services_1.serviceTypeService.createServiceType(body, params.service_id);
            res.json(createdServiceType);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.serviceTypeController = new ServiceTypeController();
//# sourceMappingURL=service-type.controller.js.map