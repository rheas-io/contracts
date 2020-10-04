import { IMiddleware } from './middleware';
import { KeyValue } from '../core/keyValue';

export type IMiddlewareTypes = string | IMiddleware;

export type IMiddlewareValues = IMiddlewareTypes | Array<IMiddlewareTypes>;

export interface IMiddlewareMap extends KeyValue<IMiddlewareValues> {
    /**
     * Collection of all the global middlewares.
     *
     * @property
     */
    global: IMiddlewareTypes[];
}
