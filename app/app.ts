import {bootstrap} from 'angular2/platform/browser';
import {Component, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Calculation} from './calculations';
import {AppData} from './app.data';

class Hero {
   id: number;
   name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id: </label>{{hero.id}}
        </div>
        <div>
            <label for="name">name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name" id="name"></div>
        </div>
        
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
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    
    // Testing calc
    private _c: Calculation = new Calculation(AppData.disregards);
    public disregardCode: string = '';
    public result: number = this._c.disregard(this.disregardCode);
    public codeChanged = new EventEmitter();
    
    public codeChange(value: string) {
        this.result = this._c.disregard(value);
    }
}

export {AppComponent};
