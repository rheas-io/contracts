import { StringObject } from './keyValue';

export interface IMixHandler {
    /**
     * Reads the mix-manifest.json file in the assets dir and parses it into
     * a JSON object.
     *
     * We will keep a cache of the file contents so that we don't have to parse the
     * file everytime, we need it.
     *
     * @returns
     */
    manifest(): StringObject;

    /**
     * Returns the file path from the mix-manifest.json file.
     *
     * @param path
     */
    get(path: string): string;
}
