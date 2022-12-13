import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingDocument = Topping & Document;

@Schema()
export class Topping {
   
    @Prop()
    tname: string; 
    
    @Prop()
    tprice: number;
   
}

export const toppingSchema = SchemaFactory.createForClass(Topping);

