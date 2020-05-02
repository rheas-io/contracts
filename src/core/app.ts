import { IServer } from "./server";
import { IContainer } from "./container";
import { IServiceProvider } from "./serviceProvider";

export interface IApp extends IContainer, IServer {

    startApp(): void;

    boot(): void;

    setConfigDir(folder: string): IApp;

    registerService(name: string, service: IServiceProvider): void;

    bootService(service: IServiceProvider): void;

    isDeferredService(name: string): boolean;

    config<T>(key: string, defaultValue?: T): T | null;

    getConfigDir(): string;

    getRootPath(): string;

    getAssetPath(): string;
}