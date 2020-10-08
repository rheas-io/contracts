import { ClassOf } from '../core/class';
import { KeyValue } from '../core/keyValue';
import { IServiceProvider } from '../services';

export type IAppProviders = KeyValue<ClassOf<IServiceProvider>> & {
    // Mandatory services that has to be present in the app service
    // provider configuration file.
    db: ClassOf<IServiceProvider>;
    url: ClassOf<IServiceProvider>;
    cli: ClassOf<IServiceProvider>;
    mail: ClassOf<IServiceProvider>;
    core: ClassOf<IServiceProvider>;
    view: ClassOf<IServiceProvider>;
    hash: ClassOf<IServiceProvider>;
    error: ClassOf<IServiceProvider>;
    router: ClassOf<IServiceProvider>;
    kernal: ClassOf<IServiceProvider>;
    encrypt: ClassOf<IServiceProvider>;
    middlewares: ClassOf<IServiceProvider>;
    // Add the keys, that should never be added in the
    // config files. These providers are already registered
    // in the container itself.
    env?: never;
    configs?: never;
    services?: never;
};
