System.register([], function(exports_1) {
    var AppData;
    return {
        setters:[],
        execute: function() {
            exports_1("AppData", AppData = {
                "integrated": false,
                "properties": {
                    "type": "Main",
                    "houseNumberOrName": "",
                    "addressLine1": "",
                    "addressLine2": "",
                    "postcode": "",
                    "estimatedValue": 0,
                    "percentOwned": 0,
                    "soleOwner": true
                },
                "assetTypes": [
                    {
                        "code": "",
                        "description": ""
                    }
                ],
                "benefitTypes": [
                    {
                        "code": "",
                        "description": "",
                        "display": "select|input",
                        "options": [
                            {
                                "text": "",
                                "value": ""
                            }
                        ]
                    }
                ],
                "otherIncomeTypes": [
                    {
                        "code": "",
                        "description": ""
                    }
                ],
                "expenditureTypes": [
                    {
                        "code": "",
                        "description": ""
                    }
                ],
                "calculation": {
                    "assetThreshold": {
                        "low": 14250,
                        "high": 23250
                    },
                    "personalAllowance": 0,
                    "ageRelatedAllowance": [
                        {
                            "ageLow": 0,
                            "ageHigh": 0,
                            "amount": 0
                        }
                    ],
                    "disregards": {
                        "res": {
                            "benefits": [
                                { "code": "A", "value": 0.1 },
                                { "code": "B", "value": 0.2 },
                                { "code": "C", "value": 0.3 },
                                { "code": "D", "value": 0.4 }
                            ],
                            "expenditure": []
                        },
                        "nonres": {
                            "benefits": [
                                { "code": "NA", "value": 0.1 },
                                { "code": "NB", "value": 0.2 },
                                { "code": "NC", "value": 0.3 },
                                { "code": "ND", "value": 0.4 }
                            ],
                            "expenditure": [
                                { "code": "NEA", "value": 0.1 },
                                { "code": "NEB", "value": 0.2 },
                                { "code": "NEC", "value": 0.3 },
                                { "code": "NED", "value": 0.4 }
                            ]
                        }
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=app.data.js.map