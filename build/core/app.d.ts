import { IServer } from "./server";
import { IContainer } from "./container";
import { IServiceProvider } from "./serviceProvider";
export interface IApp extends IContainer, IServer {
    startApp(): void;
    boot(): void;
    registerService(name: string, service: IServiceProvider): void;
    bootService(service: IServiceProvider): void;
    isDeferredService(name: string): boolean;
    config(key: string): any;
    getConfigPath(): string;
    getRootPath(): string;
    getAssetPath(): string;
}
