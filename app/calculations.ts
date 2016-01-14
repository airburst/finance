import {Lookup} from './lookup';

class Calculation {
    
    private _calcData: any;
    
    constructor(public calculationData: any) {
        this._calcData = calculationData;
    }
    
    public disregard(type: string, disregardType: string, code: string): number {
        let _d: number = 0;
        
        // Establish which data table we should use within _calcData.disregards
        // Res or non-res
        let _type = (type === 'res') ? this._calcData.disregards.res : this._calcData.disregards.nonres;
        
        // Benefits or expenditure
        if ((_type !== undefined) && (_type !== null)) {
            let _disregardTable = (disregardType === 'benefits') ? _type.benefits : _type.expenditure;
            
            // Do lookup
            if ((_disregardTable !== undefined) && (_disregardTable !== null)) {
                _disregardTable.forEach(lookup => {
                    if (lookup.code === code) _d += lookup.value;
                });
            }
        }
        return _d;
    }
};

export {Calculation};
