import {bootstrap} from 'angular2/platform/browser';
import {Component, EventEmitter, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Calculation} from './calculations';
import {DataService} from './data/data.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <div>
            <label for="code">code: </label>
            <div><input #item (keyup)="codeChange(item.value)" placeholder="code" id="code"></div>
        </div>
        <h3>Disregard result = {{result | percent: '.0'}}</h3>
        `,
    directives: [FORM_DIRECTIVES],
    providers: [DataService]
})

export class AppComponent implements OnInit {
    constructor(private _dataService: DataService) { }
  
    private _appData: any;
    private _c: Calculation;
    public title: string = 'Financial Calculations';
    public disregardCode: string = '';
    public result: number = 0;

    // Instantiate the calculation class
    initCalculation() {
        this._c = new Calculation(this._appData)
    }
    
    // Initialise - Get AppData
    ngOnInit() {
        this._dataService.getData()
            .then(appData => this._appData = appData)
            .then(initCalc => this.initCalculation());
    }
    
    public codeChange(value: string) {
        this.result = this._c.disregard('res', 'benefits', value);
    }
}
