System.register(['./calculations', './data/data.mock'], function(exports_1) {
    var calculations_1, data_mock_1;
    return {
        setters:[
            function (calculations_1_1) {
                calculations_1 = calculations_1_1;
            },
            function (data_mock_1_1) {
                data_mock_1 = data_mock_1_1;
            }],
        execute: function() {
            describe('Calculations > Disregards: General', function () {
                it('returns zero for an unknown code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', 'unknown')).toEqual(0);
                });
                it('returns zero for an empty (undefined) code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', undefined)).toEqual(0);
                });
                it('returns zero for an empty (null) code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', null)).toEqual(0);
                });
                it('returns the correct percentage for a known code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
                });
            });
            describe('Calculations > Disregards: RES', function () {
                it('returns the correct percentage for a known RES Benefits code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
                });
                it('returns zero for an unlisted RES Benefits code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'benefits', 'ND')).toEqual(0);
                });
                it('returns zero for a RES Expenditure code (empty array)', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('res', 'expenditure', 'D')).toEqual(0);
                });
            });
            describe('Calculations > Disregards: NON-RES', function () {
                it('returns the correct percentage for a known NON-RES Benefits code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('nonres', 'benefits', 'NC')).toEqual(0.3);
                });
                it('returns zero for an unlisted NON-RES Benefits code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('nonres', 'benefits', 'C')).toEqual(0);
                });
                it('returns the correct percentage for a NON-RES Expenditure code', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    expect(calc.disregard('nonres', 'expenditure', 'NEA')).toEqual(0.1);
                });
            });
            describe('Calculations > Personal Allowance', function () {
                it('returns the statutory amount for a RES user', function () {
                    var calc = new calculations_1.Calculation(data_mock_1.AppData);
                    var dob = new Date();
                    expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                });
                // it('returns zero for an undefined type', () => {
                //     let calc = new Calculation(AppData);
                //     let dob = new Date();
                //     expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                // });
                // it('returns zero for a null type', () => {
                //     let calc = new Calculation(AppData);
                //     let dob = new Date();
                //     expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                // });
                // it('returns zero for an undefined dob', () => {
                //     let calc = new Calculation(AppData);
                //     let dob = new Date();
                //     expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                // });
                // it('returns zero for a null dob', () => {
                //     let calc = new Calculation(AppData);
                //     let dob = new Date();
                //     expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                // });
                // it('returns zero for a malformed dob', () => {
                //     let calc = new Calculation(AppData);
                //     let dob = new Date();
                //     expect(calc.personalAllowance('res', 0, dob)).toEqual(24.9);
                // });
                // asset amounts - wrong type, etc.
                // correct non-res amounts for various ages
            });
        }
    }
});
//# sourceMappingURL=calculations.spec.js.map