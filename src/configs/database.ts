import { IConfig } from './config';

export interface IDbConfig extends IConfig {
    connector: 'sequelize' | 'mongoose';

    /**
     * Application database host.
     *
     * @property
     */
    host: string;

    /**
     * Database port number to connect to.
     *
     * @property
     */
    port: number;

    /**
     * Name of the collection/database in the db server.
     *
     * @property
     */
    database: string;

    /**
     * Additional options for connecting to the database server.
     *
     * @property
     */
    options: {};
}
