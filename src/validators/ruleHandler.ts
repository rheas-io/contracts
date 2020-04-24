export interface IRuleHandler {
    (field: string, ...params: string[]): boolean;
}