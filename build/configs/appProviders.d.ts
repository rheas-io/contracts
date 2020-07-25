import { ClassOf } from "../core/class";
import { KeyValue } from "../core/keyValue";
import { IServiceProvider } from "../services";
export declare type IAppProviders = KeyValue<ClassOf<IServiceProvider>> & {
    config?: never;
};
