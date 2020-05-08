import { ClassOf } from "./class";
import { IServer } from "./server";
import { IContainer } from "./container";
import { IServiceProvider } from "./serviceProvider";

export interface IApp extends IContainer, IServer {

    startApp(): void;

    config<T>(key: string, defaultValue?: T): T | null;

    getRootPath(): string;

    getAssetPath(): string;
}