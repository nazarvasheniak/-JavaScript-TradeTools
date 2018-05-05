import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Depth, Symbol } from '../../common/models';
import { ResponseHelper } from '../helpers';

import * as moment from 'moment';

const headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');

@Injectable()
export class BinanceService {
    constructor(
        private http: Http
    ) {}

    public getSymbols() {
        return this.http.get('https://api.binance.com/api/v1/ticker/allPrices', { headers: headers })
            .forEach(symbol => new Symbol());
    }

    public getOrderBook(symbol: string): Observable<Response> {
        return this.http.get('https://api.binance.com/api/v1/depth?symbol=${}');
    }

    public auth() {
        return this.http.get('https://api.binance.com/api/v1/depth?symbol=BTCUSDT', { headers: headers });
    }

    protected extractData(response: Response) {
        return this.helper.extractData(response);
    }

    protected mapToObject<T extends Serializable>(data: any, type: { new(): T}) {
        return this.helper.mapToObject(data, type);
    }
}