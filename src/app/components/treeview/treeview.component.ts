import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../../models/Employee";

@Component({
	selector: 'tree-view',
    templateUrl: './treeview.component.html',
    styleUrls: ['./treeview.component.scss'],
})

export class TreeViewComponent implements OnInit{
	@Input()
    directories: Array < number >;
    
    @Input()
    map: {
        [index: number]: Employee
    };

	constructor() {}

    ngOnInit():void {}
}
