import { IConfig } from "./config";
export interface IApp {
    startApp(): void;
    config(key: string): any;
    getConfigurations(): IConfig;
    getRootPath(): string;
    getAssetPath(): string;
}
