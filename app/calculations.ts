export class Calculation {
    
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
    
    public personalAllowance(type: string, asset: number, dob: Date): number {
        let _pa = 0;
        
        // "assetThreshold": {
        //     "low": 14250,
        //     "high": 23250
        // },

        // "ageRelatedAllowance": [
        //     {"ageLow": 18, "ageHigh": 24, "amount": 100},
        //     {"ageLow": 25, "ageHigh": 64, "amount": 200},
        //     {"ageLow": 64, "ageHigh": 999, "amount": 300}
        // ]
        
        // Calculate personal or age-related allowance
        // Establish whether person is res or non-res
        // Res is only entitled to the statutory personal allowance
        if (type === 'res') { return this._calcData.personalAllowance; }
        
        return _pa;
    }
};
