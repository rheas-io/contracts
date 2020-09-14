import { IMailMessage } from './mailMessage';
import { IDispatcher } from '../notifications';

export interface IMailer extends IDispatcher<IMailMessage> {}
