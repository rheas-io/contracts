/// <reference types="node" />
import { CipherGCMTypes } from "crypto";
import { AnyObject } from "../core/keyValue";
export interface IAppConfig extends AnyObject {
    key: string;
    cipher: CipherGCMTypes;
}
