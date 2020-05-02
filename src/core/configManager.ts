export interface IConfigManager {
    config<T>(key: string, defaultValue?: T): T | null;
}