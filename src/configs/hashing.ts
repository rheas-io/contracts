import { IConfig } from './config';

export interface IHashConfig extends IConfig {
    /**
     * Application hashing key.
     *
     * @property
     */
    key: string;

    /**
     * Default hashing algo name.
     *
     * @property
     */
    driver: string;

    /**
     * Properties specific to bcrypt hashing algo.
     *
     * @property
     */
    bcrypt?: IBcryptConfig;

    /**
     * Properties specific to argon hashing algo.
     *
     * @property
     */
    argon?: IArgonConfig;
}

/**
 * Bcrypt algo configurations.
 */
export interface IBcryptConfig extends IConfig {
    rounds: number;
}

/**
 * Argon algo configurations.
 */
export interface IArgonConfig extends IConfig {
    memory: number;
    threads: number;
    time: number;
}
