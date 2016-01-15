// import {Injectable} from 'angular2/core';
System.register([], function(exports_1) {
    var Calculation;
    return {
        setters:[],
        execute: function() {
            // @Injectable()
            // export class CalculationService {
            //     getData() {
            //         return AppData;
            //     }
            // }
            Calculation = (function () {
                function Calculation(appData) {
                    this.appData = appData;
                    this._calcData = appData.calculation;
                }
                Calculation.prototype.disregard = function (type, disregardType, code) {
                    var _d = 0;
                    // Establish which data table we should use within _calcData.disregards
                    // Res or non-res
                    var _type = (type === 'res') ? this._calcData.disregards.res : this._calcData.disregards.nonres;
                    // Benefits or expenditure
                    if ((_type !== undefined) && (_type !== null)) {
                        var _disregardTable = (disregardType === 'benefits') ? _type.benefits : _type.expenditure;
                        // Do lookup
                        if ((_disregardTable !== undefined) && (_disregardTable !== null)) {
                            _disregardTable.forEach(function (lookup) {
                                if (lookup.code === code)
                                    _d += lookup.value;
                            });
                        }
                    }
                    return _d;
                };
                Calculation.prototype.personalAllowance = function (type, asset, dob) {
                    var _pa = 0;
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
                    if (type === 'res') {
                        return this._calcData.personalAllowance;
                    }
                    return _pa;
                };
                return Calculation;
            })();
            exports_1("Calculation", Calculation);
            ;
        }
    }
});
//# sourceMappingURL=calculations.js.map