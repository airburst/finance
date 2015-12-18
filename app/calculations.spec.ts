import {Lookup} from './app.data';
import {Calculation} from './calculations';

// Set test calculation data
const disregardData: Array<Lookup> = [
    { "code": "A", "value": 0.1 },
    { "code": "B", "value": 0.2 },
    { "code": "C", "value": 0.3 },
    { "code": "D", "value": 0.4 }
];

describe('Calculations > Disregards', () => {
    
    it('returns zero for an unknown code', () => {
        let calc = new Calculation(disregardData);
        expect(calc.disregard('unknown')).toEqual(0);
    });
    
    it('returns zero for an empty (undefined) code', () => {
        let calc = new Calculation(disregardData);
        expect(calc.disregard(undefined)).toEqual(0);
    });
    
    it('returns zero for an empty (null) code', () => {
        let calc = new Calculation(disregardData);
        expect(calc.disregard(null)).toEqual(0);
    });
    
    it('returns the correct percentage for a known code', () => {
        let calc = new Calculation(disregardData);
        expect(calc.disregard('D')).toEqual(0.4);
    });
    
})