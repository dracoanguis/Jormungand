import fetch from 'node-fetch';
import { ForceReply, InlineKeyboardMarkup, InputFile, Message, MessageEntity, MessageId, ReplyKeyboardMarkup, ReplyKeyboardRemove, Update, User, WebhookInfo } from './tel_types';


const api_link: string = 'https://api.telegram.org/';


export class Bot {
    readonly token: string;
    readonly link: string;

    constructor(token:string) {
        this.token = token;
        this.link = `${api_link}bot${token}`
    }

    async post(command_name:string,json) {
        try {
            const command = `${this.link}/${command_name}`;
            const response = await fetch(command,{method: 'POST', body: JSON.stringify(json), headers: {'content-type':'application/json',Accept:'application/json'}});
    
            if (!response.ok){
                throw new Error(`sendMessage failed! status: ${response.status}`);
            }
    
            const result = await response.json();
    
            return result;
    
        } catch(error) {
            if (error instanceof Error){
                console.error(error);
            }
            
        }
    }

    async getUpdates(demand: {offset?: number, limit?: number, timeout?: number, allowed_updates?: string[]}): Promise<Update[]> {
        const result = await this.post('getUpdates',demand);
        return result.result as Update[];
    }

    async setWebhook(demand:{url: string, certificate?:InputFile, ip_address?: string, max_connections?: number, allowed_updates?: string[], drop_pending_updates?: boolean}): Promise<boolean> {
        const result = await this.post('setWebhook',demand);
        return result.result as boolean;
    }

    async deleteWebhook(demand: {drop_pending_updtaes?: boolean}): Promise<boolean> {
        const result = await this.post('deleteWebhook',demand);
        return result.result as boolean;
    }

    async getWebhookInfo(): Promise<WebhookInfo> {
        const result = await this.post('getWebhookInfo',{});
        return result.result as WebhookInfo;
    }

    async getMe(): Promise<User> {
        const result = await this.post('getMe',{});
        return result.result as User;
    }

    async logOut(): Promise<boolean> {
        const result = await this.post('logOut',{});
        return result.result as boolean;
    }

    async close(): Promise<boolean> {
        const result = await this.post('close',{});
        return result.result as boolean;
    }

    async sendMessage(demand:{chat_id:string|number, text:string, parse_mode?: string, entities?: MessageEntity[], disable_web_page_preview?: boolean, disable_notification?: boolean, protect_content?: boolean, reply_to_message_id?: number, allow_sending_without_reply?: boolean, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply}): Promise<Message> {
        const result = await this.post('sendMessage',demand);
        return result.result as Message;
    }

    async forwardMessage(demand:{chat_id:string|number, from_chat_id:string|number, disable_notifiaction?: boolean, protect_content?: boolean, message_id:string|number}): Promise<Message> {
        const result = await this.post('forwardMessage',demand);
        return result.result as Message;
    }

    async copyMessage(demand:{chat_id:string|number, from_chat_id:string|number, message_id:number,caption?:string, parse_mode?:string, caption_entities?:MessageEntity[], disable_notification?: boolean, protect_content?: boolean, reply_to_message_id?:number, allow_sending_without_reply?: boolean, reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply}): Promise<MessageId> {
        const r = await this.post('copyMessage',demand);
        return r.result as MessageId;
    }

    async sendPhoto(demand:{chat_id:string|number,photo:InputFile|string, caption?:string,parse_mode?:string,caption_entities?:MessageEntity[], disable_notifiaction?:boolean, protect_content?:boolean, reply_to_message_id?:string|number, allow_sending_without_reply?:boolean, reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply}): Promise<Message> {
        const r =  await this.post('sendPhoto',demand);
        return r.result as Message;
    }

    async sendAudio(demand:{chat_id:string|number,
                            audio:InputFile|string,
                            caption?:string,
                            parse_mode?:string,
                            caption_entities?:MessageEntity[],
                            duration?:number,
                            performer?:string,
                            title?:string,
                            thumb?:InputFile|string,
                            disable_notification?:boolean,
                            protect_content?:boolean,
                            reply_to_message_id?:number,
                            allow_sending_wothout_reply?:boolean,
                            reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
                        }): Promise<Message> {
        const r = await this.post('sendAudio',demand);
        return r.result as Message;
    }

    async sendDocument(
        demand:{
            chat_id:string|number,
            document:InputFile|string,
            thumb?:InputFile|string,
            caption?:string,
            parse_mode?:string,
            caption_entities?:MessageEntity[],
            disable_content_type_detection?:boolean,
            disable_notification?:boolean,
            protect_content?:boolean,
            reply_to_message_id?:number,
            allow_sending_wothout_reply?:boolean,
            reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply
        }
    ): Promise<Message> {
        const r = await this.post('sendDocument',demand);
        return r.result as Message;
    }

}
