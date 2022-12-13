import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type wiwistoreDocument = Wiwistore & Document;

@Schema()
export class Wiwistore {
   
   @Prop()
   storeid: number; 
   
   @Prop()
   storename: string; 
   
   @Prop()
   storelocation: string; 
   
}

export const wiwistoresSchema = SchemaFactory.createForClass(Wiwistore);
