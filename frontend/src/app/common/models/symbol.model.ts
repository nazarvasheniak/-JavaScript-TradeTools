import { Serializable } from './common';

export class Symbol extends Serializable {
    public symbol: string;
    public price: number;
}