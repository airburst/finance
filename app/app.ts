import {bootstrap} from 'angular2/platform/browser';
import {Component, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Calculation} from './calculations';
import {AppData} from './app.data';

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
    events: ['codeChanged']
})

class AppComponent {
    public title = 'Financial Calculations';

    // Testing calc
    private _c: Calculation = new Calculation(AppData.calculation);
    public disregardCode: string = '';    
    public result: number = this._c.disregard('res', 'benefits', this.disregardCode);
    public codeChanged = new EventEmitter();
    
    public codeChange(value: string) {
        this.result = this._c.disregard('res', 'benefits', value);
    }
}

export {AppComponent};
