import { ClassOf } from "../core/class";
import { KeyValue } from "../core/keyValue";
import { IServiceProvider } from "../services";

export type IAppProviders = KeyValue<ClassOf<IServiceProvider>> & {
    // Add the keys, that should never be added in the
    // config files. These providers are already registered
    // in the container itself.
    env?: never,
    configs?: never,
    services?: never
};