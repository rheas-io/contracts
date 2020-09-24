export interface KeyValue<T> {
    [key: string]: T;
}

export interface AnyObject extends KeyValue<any> {}

export interface StringObject extends KeyValue<string> {}

type JsonTypes = string | number | null;
type JsonArray = Array<JsonTypes | JsonObject | JsonArray>;

export interface JsonObject {
    [key: string]: JsonTypes | JsonObject | JsonArray;
}
