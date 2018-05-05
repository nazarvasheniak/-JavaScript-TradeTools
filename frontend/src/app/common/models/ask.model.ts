import { Serializable } from './common';

export class Ask extends Serializable {
    public price: number;
    public amount: number;
}