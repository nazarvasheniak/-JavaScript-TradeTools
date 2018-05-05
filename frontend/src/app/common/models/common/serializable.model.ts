export abstract class Serializable {
    fromJSON(json) {
        for (let propName in json) {
            if (typeof json[propName] != 'function') {
                this[propName] = json[propName];
            }
        }
        return this;
    }
}