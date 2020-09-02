import { IRequest } from '../core/request';
import { IResponse } from '../core/response';

export interface IRequestHandler {
    (req: IRequest, res: IResponse, ...params: any): Promise<IResponse>;
}
