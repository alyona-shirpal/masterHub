"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const schemas_1 = require("../schemas");
class ServiceController {
    async createService(req, res, next) {
        try {
            await schemas_1.ServiceModel.create(req.body);
            console.log(req.body);
            res.json('OK');
        }
        catch (e) {
            next(e);
        }
    }
}
exports.serviceController = new ServiceController();
//# sourceMappingURL=service.controller.js.map