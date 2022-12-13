import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type storemenuDocument = Storemenu & Document;

@Schema()
export class Storemenu {
   
   @Prop()
   itemname: string; 
   
   @Prop()
   desc: string; 
   
   @Prop()
   price: number; 
   
   @Prop()
   storeid: string[]; 

   @Prop()
   topping: string[];
   
}

export const storemenuSchema = SchemaFactory.createForClass(Storemenu);


