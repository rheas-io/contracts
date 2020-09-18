import { IModel } from './model';
import { Document, Model, Mongoose, Schema } from 'mongoose';

export interface IMongoModel<T extends Document> extends IModel<Mongoose, Model<T>, Schema> {}
