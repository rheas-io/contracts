import { ClassOf } from '../core/class';
import { KeyValue } from '../core/keyValue';
import { IServiceProvider } from '../services';

export type IRequestProviders = KeyValue<ClassOf<IServiceProvider>> & {
    // Mandatory services of request lifecycle.
    cookie: ClassOf<IServiceProvider>;
    session: ClassOf<IServiceProvider>;
    redirect: ClassOf<IServiceProvider>;
    // Add the keys, that should never be added in the
    // config files. These providers are already registered
    // in the container itself.
    app?: never;
    response?: never;
    services?: never;
};
