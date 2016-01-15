import {Calculation} from './calculations';
import {AppData} from './data/data.mock';

describe('Calculations > Disregards: General', () => {
    
    it('returns zero for an unknown code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', 'unknown')).toEqual(0);
    });
    
    it('returns zero for an empty (undefined) code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', undefined)).toEqual(0);
    });
    
    it('returns zero for an empty (null) code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', null)).toEqual(0);
    });
    
    it('returns the correct percentage for a known code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
    });
    
});

describe('Calculations > Disregards: RES', () => {
       
    it('returns the correct percentage for a known RES Benefits code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
    });
    
    it('returns zero for an unlisted RES Benefits code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'benefits', 'ND')).toEqual(0);
    });
    
    it('returns zero for a RES Expenditure code (empty array)', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('res', 'expenditure', 'D')).toEqual(0);
    });
    
});

describe('Calculations > Disregards: NON-RES', () => {
       
    it('returns the correct percentage for a known NON-RES Benefits code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('nonres', 'benefits', 'NC')).toEqual(0.3);
    });
    
    it('returns zero for an unlisted NON-RES Benefits code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('nonres', 'benefits', 'C')).toEqual(0);
    });
    
    it('returns the correct percentage for a NON-RES Expenditure code', () => {
        let calc = new Calculation(AppData);
        expect(calc.disregard('nonres', 'expenditure', 'NEA')).toEqual(0.1);
    });
    
});

describe('Calculations > Personal Allowance', () => {
       
    it('returns the statutory amount for a RES user', () => {
        let calc = new Calculation(AppData);
        let dob = new Date();
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