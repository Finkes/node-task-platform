import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App {{title}}</h1>
        <ul>
            <li *ngFor='#job of jobs'>
                {{job.name}}
            </li>
        </ul>
    `,
    styles: [],
    directives: [],
    providers:[]
})
export class AppComponent implements OnInit{ 
    public title = "custom title";
    
    private jobs = [
        {
            name: "test"
        },
        {
            name: "test2"
        }
    ];

    constructor(){   
    }
    
    ngOnInit(){
    }
    


}