import { ClassOf } from "./class";
import { IServer } from "./server";
import { IContainer } from "./container";
import { IServiceProvider } from "./serviceProvider";

export interface IApp extends IContainer, IServer, IServiceProvider {

    startApp(): void;

    registerService(name: string, serviceProvider: IServiceProvider): void;

    registerServiceByName(key: string): void;

    isServiceLoaded(name: string): boolean;

    bootService(service: IServiceProvider): void;

    isDeferredService(name: string): boolean;

    config<T>(key: string, defaultValue?: T): T | null;

    getRootPath(): string;

    getAssetPath(): string;
}