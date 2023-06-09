/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { TransactionEntity, TransactionStatus, TransactionType } from './transaction.enum';
export type TransactionDocument = Transaction & Document;
export declare class Transaction {
    _id?: any;
    amount: number;
    payer_id: Types.ObjectId;
    reciever_id: Types.ObjectId;
    payment_link_id: Types.ObjectId;
    in_entity_id: Types.ObjectId;
    in_entity: TransactionEntity;
    out_entity_id: Types.ObjectId;
    out_entity: TransactionEntity;
    type: TransactionType;
    reference: string;
    status?: TransactionStatus;
    is_charges: boolean;
    payment_date: Date;
}
export declare const TransactionSchema: import("mongoose").Schema<Transaction, import("mongoose").Model<Transaction, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transaction>;
