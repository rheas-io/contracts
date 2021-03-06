import { IConfig } from './config';
import { CipherGCMTypes } from 'crypto';
import { IAppProviders } from './appProviders';

export interface IAppConfig extends IConfig {
    /**
     * The application name.
     * 
     * @property
     */
    name: string;

    /**
     * The application production flag. By default rheas application
     * configs are in debug mode. Change this to true in environment
     * file before deploying to production.
     * 
     * @property
     */
    production: boolean;

    /**
     * The port where http request has to be served. Rheas application
     * will listen to this port for http requests.
     * 
     * @property
     */
    port: number;

    /**
     * The port where secure requests are served. Application will listen to
     * this port for https requests.
     * 
     * @property
     */
    secure_port: number;

    /**
     * Prints log on console, when debug is set to true. Set this to false on
     * production as writing to console is a heavy operation.
     * 
     * @property
     */
    debug: boolean;

    /**
     * Maintenance mode flag. When this flag is set true, the server will respond
     * back with a 503 json response/maintenance page html. No other request will pass
     * through.
     * 
     * @property
     */
    maintenance: boolean;

    /**
     * Maintenance mode allowed ips. Requests from these ip's will bypass the maintenance
     * mode restrictions.
     * 
     * @property
     */
    allowed_ips: string[];

    /**
     * Application encryption key used when encrypting data. This is read from the
     * env variable as it has to be kept secret.
     *
     * Key should be generated when new app is created for the given cipher.
     * 
     * @property
     */
    key: string;

    /**
     * The key cipher used by the application. Rheas supported ciphers are
     * aes-128-gcm, aes-192-gcm and aes-256-gcm. Application by default uses the
     * aes-256-gcm encryption
     * 
     * @property
     */
    cipher: CipherGCMTypes;

    /**
     * Service providers that issues app level services. These services are
     * initialized once and they continue to exist through the application
     * lifetime and these are shared by different request.
     *
     * Don't add any services that works on individual requests in here. For those,
     * use the providers on request config.
     * 
     * @property
     */
    providers: IAppProviders;
}
