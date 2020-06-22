export interface IFiles {
    /**
     * Checks if a file at path exists
     *
     * @param path
     */
    exists(path: string): boolean;
    /**
     * Checks if a file at the given path is a directory
     * or not.
     *
     * @param path
     */
    isDirectory(path: string): boolean;
}
