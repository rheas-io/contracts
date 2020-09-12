import { Stats, WriteFileOptions } from 'fs';

export interface IFileManager {
    /**
     * Reads a JS file and returns the specified export module.
     *
     * @param filePath
     * @param module
     */
    readJs(filePath: string, module?: string): Promise<undefined | any>;

    /**
     * Asynchronous file write. Throws an error, if the file does not
     * exists or some write error occurs. If a file exists, it will be
     * replaced all the time and writes the new data to it.
     *
     * @param filePath
     * @param data
     * @param options
     */
    writeToFile(filePath: string, data: any, options?: WriteFileOptions): Promise<boolean>;

    /**
     * Deletes a file from the filesystem. Only files will be deleted and
     * trying to delete a directory will throw an exception.
     *
     * @param filePath
     */
    remove(filePath: string): Promise<boolean>;

    /**
     * Reads a JS file blocking read.
     *
     * @param filePath
     * @param module
     */
    readJsSync(filePath: string, module?: string): undefined | any;

    /**
     * Read contents of a file and returns as string. Throws an exception if
     * an error occurs when reading
     *
     * @param filePath
     * @param encoding
     */
    readFile(filePath: string): Promise<Buffer>;

    /**
     * Reads a file and converts the Buffer to string and returns it.
     *
     * @param filePath
     * @param encoding
     */
    readTextFile(filePath: string, encoding?: string): Promise<string>;

    /**
     * Read contents of a file synchronously
     *
     * @param filePath
     * @param encoding
     */
    readFileSync(filePath: string): Buffer;

    /**
     * Reads a file and converts the Buffer to string and returns it.
     * Blocking function.
     *
     * @param filePath
     * @param encoding
     */
    readTextFileSync(filePath: string, encoding?: string): string;

    /**
     * Returns the file stats of the given path.
     *
     * @param path
     */
    fileStats(path: string): Promise<Stats>;

    /**
     * Returns the file stats of the given path. Blocking execution.
     *
     * @param path
     */
    fileStatsSync(path: string): Stats | null;

    /**
     * Checks if a file exists or not.
     *
     * @param filePath
     */
    fileExists(filePath: string): Promise<boolean>;

    /**
     * Blocking check of file existance.
     *
     * @param filePath
     */
    fileExistsSync(filePath: string): boolean;

    /**
     * Checks if a directory exists or not.
     *
     * @param dirPath
     */
    directoryExists(dirPath: string): Promise<boolean>;

    /**
     * Blocking checks of directory existance.
     *
     * @param dirPath
     */
    directoryExistsSync(dirPath: string): boolean;
}
