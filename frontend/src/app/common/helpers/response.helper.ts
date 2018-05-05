import { Observable } from 'rxjs/Rx';
import { Serializable } from '../models/common';
import { Response } from '@angular/http';

export class ResponseHelper {
    extractData(response: Response) {
        let result = response.json();

        if (result.isSuccessful) {
            return result.data || null;
        }
    }

    mapToObject<T extends Serializable>(data: any, type: { new(): T}) {
        return (new type()).fromJSON(data);
    }
}