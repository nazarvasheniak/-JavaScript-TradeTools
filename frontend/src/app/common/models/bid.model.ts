import { Serializable } from './common';

export class Bid extends Serializable {
    public price: number;
    public amount: number;
}