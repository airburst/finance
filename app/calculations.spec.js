System.register(['./calculations'], function(exports_1) {
    var calculations_1;
    var disregardData;
    return {
        setters:[
            function (calculations_1_1) {
                calculations_1 = calculations_1_1;
            }],
        execute: function() {
            // Set test calculation data
            disregardData = [
                { "code": "A", "value": 0.1 },
                { "code": "B", "value": 0.2 },
                { "code": "C", "value": 0.3 },
                { "code": "D", "value": 0.4 }
            ];
            describe('Calculations > Disregards', function () {
                it('returns zero for an unknown code', function () {
                    var calc = new calculations_1.Calculation(disregardData);
                    expect(calc.disregard('unknown')).toEqual(0);
                });
                it('returns zero for an empty (undefined) code', function () {
                    var calc = new calculations_1.Calculation(disregardData);
                    expect(calc.disregard(undefined)).toEqual(0);
                });
                it('returns zero for an empty (null) code', function () {
                    var calc = new calculations_1.Calculation(disregardData);
                    expect(calc.disregard(null)).toEqual(0);
                });
                it('returns the correct percentage for a known code', function () {
                    var calc = new calculations_1.Calculation(disregardData);
                    expect(calc.disregard('D')).toEqual(0.4);
                });
            });
        }
    }
});
//# sourceMappingURL=calculations.spec.js.map