"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTypeService = void 0;
const ServiceType_schema_1 = require("../../schemas/ServiceType.schema");
const schemas_1 = require("../../schemas");
class ServiceTypeService {
    async createServiceType(serviceTypeObject, service_id) {
        const createdServiceType = await ServiceType_schema_1.ServiceTypeModel.create({
            service_id,
            ...serviceTypeObject
        });
        await schemas_1.ServiceModel.findByIdAndUpdate(service_id, {
            $addToSet: { type: createdServiceType._id }
        });
        return createdServiceType;
    }
}
exports.serviceTypeService = new ServiceTypeService();
//# sourceMappingURL=service-type.service.js.map