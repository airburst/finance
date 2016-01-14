import {Calculation} from './calculations';
import {AppData} from './app.data';

describe('Calculations > Disregards: General', () => {
    
    it('returns zero for an unknown code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', 'unknown')).toEqual(0);
    });
    
    it('returns zero for an empty (undefined) code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', undefined)).toEqual(0);
    });
    
    it('returns zero for an empty (null) code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', null)).toEqual(0);
    });
    
    it('returns the correct percentage for a known code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
    });
    
});

describe('Calculations > Disregards: RES', () => {
       
    it('returns the correct percentage for a known RES Benefits code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', 'D')).toEqual(0.4);
    });
    
    it('returns zero for an unlisted RES Benefits code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'benefits', 'ND')).toEqual(0);
    });
    
    it('returns zero for a RES Expenditure code (empty array)', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('res', 'expenditure', 'D')).toEqual(0);
    });
    
});

describe('Calculations > Disregards: NON-RES', () => {
       
    it('returns the correct percentage for a known NON-RES Benefits code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('nonres', 'benefits', 'NC')).toEqual(0.3);
    });
    
    it('returns zero for an unlisted NON-RES Benefits code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('nonres', 'benefits', 'C')).toEqual(0);
    });
    
    it('returns the correct percentage for a NON-RES Expenditure code', () => {
        let calc = new Calculation(AppData.calculation);
        expect(calc.disregard('nonres', 'expenditure', 'NEA')).toEqual(0.1);
    });
    
});