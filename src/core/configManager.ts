export interface IConfigManager {
    get<T>(key: string, defaultValue?: T): T | null;
}