System.register([], function(exports_1) {
    var Calculation;
    return {
        setters:[],
        execute: function() {
            Calculation = (function () {
                function Calculation(disregardTable) {
                    this.disregardTable = disregardTable;
                    this._disregards = disregardTable;
                }
                Calculation.prototype.disregard = function (code) {
                    var d = 0;
                    this._disregards.forEach(function (lookup) { if (lookup.code === code)
                        d += lookup.value; });
                    return d;
                };
                return Calculation;
            })();
            ;
            exports_1("Calculation", Calculation);
        }
    }
});
//# sourceMappingURL=calculations.js.map