import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Employee } from "../../models/Employee";

@Component({
	selector: 'tree-view',
    templateUrl: './treeview.component.html',
    styleUrls: ['./treeview.component.scss']
})
export class TreeViewComponent implements OnInit{
	@Input()
    public directories: Array < number >;
    
    @Input()
    public map: {
        [index: number]: Employee
    };

	constructor() {}

    ngOnInit():void {}
}
