import { IServiceType } from '../../interfaces';
import { ServiceTypeModel } from '../../schemas/ServiceType.schema';
import { ServiceModel } from '../../schemas';

class ServiceTypeService {
    async createServiceType(serviceTypeObject: Partial<IServiceType>, service_id: string): Promise<IServiceType> {
        const createdServiceType = await ServiceTypeModel.create({
            service_id,
            ...serviceTypeObject
        });

        await ServiceModel.findByIdAndUpdate(
            service_id,
            {
                $addToSet: {type: createdServiceType._id}
            }
        );

        return createdServiceType;
    }
}

export const serviceTypeService = new ServiceTypeService();