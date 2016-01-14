System.register(['angular2/core', 'angular2/common', './calculations', './app.data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, calculations_1, app_data_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (calculations_1_1) {
                calculations_1 = calculations_1_1;
            },
            function (app_data_1_1) {
                app_data_1 = app_data_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Financial Calculations';
                    // Testing calc
                    this._c = new calculations_1.Calculation(app_data_1.AppData.calculation);
                    this.disregardCode = '';
                    this.result = this._c.disregard('res', 'benefits', this.disregardCode);
                    this.codeChanged = new core_1.EventEmitter();
                }
                AppComponent.prototype.codeChange = function (value) {
                    this.result = this._c.disregard('res', 'benefits', value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n       \n        <div>\n            <label for=\"code\">code: </label>\n            <div><input #item (keyup)=\"codeChange(item.value)\" placeholder=\"code\" id=\"code\"></div>\n        </div>\n        \n        <h3>Disregard result = {{result | percent: '.0'}}</h3>\n        ",
                        directives: [common_1.FORM_DIRECTIVES],
                        events: ['codeChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map