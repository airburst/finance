import {Lookup} from './app.data';

class Calculation {
    
    private _disregards: Array<Lookup>;
    
    constructor(public disregardTable: Array<Lookup>) {
        this._disregards = disregardTable;
    }
    
    public disregard(code: string): number {
        let d: number = 0;
        this._disregards.forEach(
            lookup => { if (lookup.code === code) d += lookup.value; }
        );
        return d;
    }
};

export {Calculation};
