import { Serializable } from './common';
import { Ask, Bid } from './';

export class Depth extends Serializable {
    public lastUpdateId: number;
    public asks: Ask[];
    public bids: Bid[];
}