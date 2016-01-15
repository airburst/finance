import {AppData} from './data.mock';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
    // Get app data from mock
    // Replace with http GET
    getData() {
        return Promise.resolve(AppData);
    }    
}