import { ClassOf } from "./class";
import { IServer } from "./server";
import { IContainer } from "./container";
import { IServiceProvider } from "./serviceProvider";

export interface IApp extends IContainer, IServer {

    startApp(): void;

    boot(): void;

    registerService(name: string, service: ClassOf<IServiceProvider>): void;

    bootService(service: IServiceProvider): void;

    isDeferredService(name: string): boolean;

    config<T>(key: string, defaultValue?: T): T | null;

    getRootPath(): string;

    getAssetPath(): string;
}