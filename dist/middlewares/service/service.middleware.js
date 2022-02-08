"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceMiddleware = void 0;
const schemas_1 = require("../../schemas");
class ServiceMiddleware {
    async checkDuplicateNames(req, res, next) {
        try {
            const { title } = req.body;
            const serviceTitle = await schemas_1.ServiceModel.findOne({
                title: title?.toLowerCase()
            });
            if (serviceTitle) {
                next(new Error('This service name already exists'));
                return;
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.serviceMiddleware = new ServiceMiddleware;
//# sourceMappingURL=service.middleware.js.map