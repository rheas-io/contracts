import { ClassOf } from "../core/class";
import { KeyValue } from "../core/keyValue";
import { IServiceProvider } from "../services";
export declare type IRequestProviders = KeyValue<ClassOf<IServiceProvider>> & {
    app?: never;
    response?: never;
    services?: never;
};
