import { IServiceType } from './service-type.interface';

export interface IService {
   title: string,
   type: {
      type: [IServiceType],
      default: []
   }

}