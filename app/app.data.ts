class Lookup {
    public code: string;
    public value: number
}

// Disregards
const disregards: Array<Lookup> = [
    { "code": "A", "value": 0.1 },
    { "code": "B", "value": 0.2 },
    { "code": "C", "value": 0.3 },
    { "code": "D", "value": 0.4 }
];

const AppData = {
    disregards: disregards
};

export {Lookup, AppData};
