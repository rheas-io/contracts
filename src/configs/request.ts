import { IConfig } from './config';
import { IRequestProviders } from './requestProviders';

export interface IRequestConfig extends IConfig {
    /**
     * Service providers that has the lifecycle same as that of
     * request. These services will be different for each requests
     * so data like session data, user data won't interfere with
     * each other.
     *
     * Keys like app, response and services can't be used as they are
     * internally registered in the framework.
     *
     * @property
     */
    providers: IRequestProviders;
}
