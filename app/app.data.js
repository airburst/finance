System.register([], function(exports_1) {
    var disregards, AppData;
    return {
        setters:[],
        execute: function() {
            // Disregards
            disregards = [
                { "code": "A", "value": 0.1 },
                { "code": "B", "value": 0.2 },
                { "code": "C", "value": 0.3 },
                { "code": "D", "value": 0.4 }
            ];
            AppData = {
                disregards: disregards
            };
            exports_1("AppData", AppData);
        }
    }
});
//# sourceMappingURL=app.data.js.map