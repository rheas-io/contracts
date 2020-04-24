import { KeyValue } from "../core/keyValue";
export interface IValidator {
    passes(): boolean;
    fails(): boolean;
    getErrors(): KeyValue<string[]>;
}
