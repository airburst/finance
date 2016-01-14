System.register([], function(exports_1) {
    var Calculation;
    return {
        setters:[],
        execute: function() {
            Calculation = (function () {
                function Calculation(calculationData) {
                    this.calculationData = calculationData;
                    this._calcData = calculationData;
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
                return Calculation;
            })();
            ;
            exports_1("Calculation", Calculation);
        }
    }
});
//# sourceMappingURL=calculations.js.map