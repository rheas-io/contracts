import { IDbConnector } from './connector';

export interface IModel<Connection = any, Model = any, Schema = any> {
    /**
     * Creates an ORM/ODM model and returns it.
     *
     * @returns
     */
    createModel(): Model;

    /**
     * Returns the model schema.
     *
     * @returns
     */
    schema(): Schema;

    /**
     * Returns the database connector name. A connector with this name
     * will be fetched from the application db connector manager.
     *
     * @returns
     */
    dbConnector(): string;

    /**
     * Returns the database connector for the model.
     *
     * @returns
     */
    connector(): IDbConnector<Connection>;

    /**
     * Returns database connection from the database connector.
     *
     * @returns
     */
    connection(): Connection;

    /**
     * Sets the name of the db connection to use with this model.
     *
     * @param name
     */
    setConnection(name: string): IModel;

    /**
     * Removes the model cache. Once removed, new requests will force the
     * creation of model on the current connection.
     *
     * @returns
     */
    resetModel(): IModel;

    /**
     * Returns the underlying ORM model.
     *
     * @returns
     */
    model(): Model;

    /**
     * Returns the name of this model.
     *
     * @returns
     */
    modelName(): string;
}
